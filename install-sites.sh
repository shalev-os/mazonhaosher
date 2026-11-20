#!/usr/bin/env bash
set -Eeuo pipefail

die() { printf 'Error: %s\n' "$*" >&2; exit 1; }
if [[ ${1:-} == --help ]]; then
  printf 'Usage: bash install-sites.sh [sites-directory]\nDefault: $HOME/sites. Run as your regular user, without sudo.\n'
  exit 0
fi
(( $# <= 1 )) || die 'Expected at most one sites-directory argument.'
(( EUID != 0 )) || die 'Run as your regular user, without sudo.'
for tool in node npm curl sudo dnf flock; do command -v "$tool" >/dev/null || die "Missing command: $tool"; done
exec 9>"${HOME:?}/.osher-sites-install.lock"
flock -n 9 || die 'Another site installation is already running.'
base=$(cd -- "${1:-${HOME:?}/sites}" && pwd -P)
sites=(osher.cc mazonhaosher.co.il)
ports=(8081 8082)

# Build as the invoking user, only if the existing production entry is absent.
for site in "${sites[@]}"; do
  source_dir="$base/$site"
  [[ -s "$source_dir/package-lock.json" ]] || die "Missing npm lockfile: $source_dir"
  if [[ ! -s "$source_dir/dist/index.html" ]]; then
    (cd -- "$source_dir" && npm ci --include=dev && npm run build)
  fi
  [[ -s "$source_dir/dist/index.html" ]] || die "Build missing: $source_dir/dist/index.html"
  [[ -z $(find "$source_dir/dist" -type l -print -quit) ]] || die "Symlink in build: $source_dir/dist"
  node --input-type=module - "$source_dir/dist" <<'NODE'
import { readFileSync, statSync } from 'node:fs';
import { resolve, sep } from 'node:path';
const root = resolve(process.argv[2]);
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const assets = [...html.matchAll(/(?:src|href)=["'](\/assets\/[^"'?#]+)[^"']*["']/g)].map(m => m[1]);
if (!assets.some(p => /\.js$/.test(p))) throw new Error(`No JavaScript build asset: ${root}`);
for (const asset of assets) {
  const path = resolve(root, '.' + asset);
  if (!path.startsWith(root + sep) || !statSync(path).isFile() || !statSync(path).size) throw new Error(`Invalid build asset: ${asset}`);
}
NODE
done

was_active=0
systemctl is-active --quiet nginx && was_active=1
was_enabled=$(systemctl is-enabled nginx 2>/dev/null || true)
sudo dnf install -y nginx diffutils
sudo nginx -t
sudo mkdir -p /var/www /etc/nginx/conf.d
backup=$(sudo mktemp -d /var/www/.osher-sites-backup.XXXXXXXX)
stage=$(sudo mktemp -d /var/www/.osher-sites-stage.XXXXXXXX)
work=$(mktemp -d)
conf=/etc/nginx/conf.d/osher-sites.conf
old_roots=(0 0)
new_roots=(0 0)
saved_conf=0
changed_conf=0
changed_service=0
exists() { sudo test -e "$1" || sudo test -L "$1"; }

rollback() {
  local code=$? restore_failed=0
  trap - EXIT HUP INT TERM
  set +e
  printf 'Installation failed; restoring previous site files and Nginx state.\n' >&2
  if (( changed_conf )); then
    if (( saved_conf )); then
      sudo cp -a --remove-destination -- "$backup/osher-sites.conf" "$conf" || restore_failed=1
    elif exists "$conf"; then
      sudo mv -T -- "$conf" "$backup/failed-osher-sites.conf" || restore_failed=1
    fi
  fi
  for i in 0 1; do
    local target="/var/www/${sites[i]}"
    if (( new_roots[i] )) && exists "$target"; then
      sudo mv -T -- "$target" "$backup/failed-${sites[i]}" || restore_failed=1
    fi
    if (( old_roots[i] )) && exists "$backup/${sites[i]}"; then
      sudo mv -T -- "$backup/${sites[i]}" "$target" || restore_failed=1
    fi
  done
  if (( changed_service )); then
    if (( was_active )); then sudo systemctl reload-or-restart nginx || restore_failed=1
    else sudo systemctl stop nginx || restore_failed=1; fi
    case "$was_enabled" in
      enabled) sudo systemctl enable nginx || restore_failed=1 ;;
      enabled-runtime) sudo systemctl disable nginx; sudo systemctl enable --runtime nginx || restore_failed=1 ;;
      masked) sudo systemctl mask nginx || restore_failed=1 ;;
      masked-runtime) sudo systemctl mask --runtime nginx || restore_failed=1 ;;
      *) sudo systemctl disable nginx || restore_failed=1 ;;
    esac
  fi
  (( restore_failed == 0 )) || printf 'Some restoration steps failed; inspect backup: %s\n' "$backup" >&2
  printf 'Backup/staging retained: %s / %s\n' "$backup" "$stage" >&2
  (( code != 0 )) || code=1
  exit "$code"
}
trap rollback EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

for site in "${sites[@]}"; do
  sudo mkdir -- "$stage/$site"
  sudo cp -R -- "$base/$site/dist/." "$stage/$site/"
  sudo find "$stage/$site" -type d -exec chmod 755 {} +
  sudo find "$stage/$site" -type f -exec chmod 644 {} +
done
sudo tee "$stage/osher-sites.conf" >/dev/null <<'NGINX'
server {
    listen 127.0.0.1:8081;
    listen [::1]:8081;
    server_name osher.cc www.osher.cc;
    root /var/www/osher.cc;
    index index.html;
    add_header X-Content-Type-Options nosniff always;
    location /assets/ { try_files $uri =404; }
    location / { try_files $uri $uri/ /index.html; }
}
server {
    listen 127.0.0.1:8082;
    listen [::1]:8082;
    server_name mazonhaosher.co.il www.mazonhaosher.co.il;
    root /var/www/mazonhaosher.co.il;
    index index.html;
    add_header X-Content-Type-Options nosniff always;
    location /assets/ { try_files $uri =404; }
    location / { try_files $uri $uri/ /index.html; }
}
NGINX
if exists "$conf"; then
  sudo cp -a -- "$conf" "$backup/osher-sites.conf"
  saved_conf=1
fi
for i in 0 1; do
  target="/var/www/${sites[i]}"
  if exists "$target"; then old_roots[i]=1; sudo mv -T -- "$target" "$backup/${sites[i]}"; fi
  new_roots[i]=1
  sudo mv -T -- "$stage/${sites[i]}" "$target"
done
temp_conf=$(sudo mktemp /etc/nginx/conf.d/.osher-sites.XXXXXXXX)
sudo install -m 644 -- "$stage/osher-sites.conf" "$temp_conf"
changed_conf=1
sudo mv -T -- "$temp_conf" "$conf"
sudo nginx -t
changed_service=1
sudo systemctl enable --now nginx
sudo systemctl reload nginx
for i in 0 1; do
  code=$(curl --noproxy localhost,127.0.0.1,::1 --fail --silent --show-error --max-time 10 -H "Host: ${sites[i]}" -o "$work/${ports[i]}.html" -w '%{http_code}' "http://127.0.0.1:${ports[i]}/")
  [[ "$code" == 200 ]] || die "Unexpected HTTP $code on port ${ports[i]}"
  cmp -s -- "$base/${sites[i]}/dist/index.html" "$work/${ports[i]}.html" || die "Unexpected index on port ${ports[i]}"
done
trap - EXIT HUP INT TERM
sudo rm -f -- "$stage/osher-sites.conf" || true
sudo rmdir -- "$stage" || true
rm -f -- "$work/8081.html" "$work/8082.html" || true
rmdir -- "$work" || true
printf 'Local sites ready: localhost:8081 and localhost:8082.\nBackup retained: %s\nCloudflare Tunnel was not changed; public routing is not verified by this installer.\n' "$backup"
