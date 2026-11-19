#!/usr/bin/env bash
# Download osher.cc and Mazon HaOsher sources from their verified GitHub repos.
set -Eeuo pipefail

usage() {
  printf 'Usage: bash %s [destination-directory]\n' "${0##*/}"
  printf 'Default destination: %s/sites\n' "$HOME"
}

if [[ ${1-} == --help || ${1-} == -h ]]; then
  usage
  exit 0
fi
if (( $# > 1 )); then
  usage >&2
  exit 2
fi
if ! command -v git >/dev/null 2>&1; then
  printf 'Git is required. Install git with your Linux package manager, then rerun.\n' >&2
  exit 1
fi

destination=${1:-"$HOME/sites"}
mkdir -p -- "$destination"
destination=$(cd -- "$destination" && pwd -P)
export GIT_TERMINAL_PROMPT=0

download_site() {
  local repository=$1 folder=$2 target remote branch working_status
  target="$destination/$folder"
  printf '\n%s\n' "$folder"

  if [[ -L "$target" ]]; then
    printf 'Refusing to modify a symbolic link: %s\n' "$target" >&2
    return 1
  fi
  if [[ ! -e "$target" ]]; then
    git clone --depth 1 --single-branch --branch main -- "$repository" "$target" || return
    return 0
  fi

  if [[ ! -d "$target/.git" && ! -f "$target/.git" ]]; then
    printf 'Destination already exists and is not this script\047s Git checkout: %s\n' "$target" >&2
    return 1
  fi
  remote=$(git -C "$target" remote get-url origin) || return
  if [[ "$remote" != "$repository" && "$remote" != "${repository%.git}" ]]; then
    printf 'Unexpected origin; leaving this directory unchanged: %s\n' "$target" >&2
    return 1
  fi
  branch=$(git -C "$target" branch --show-current) || return
  working_status=$(git -C "$target" status --porcelain) || return
  if [[ "$branch" != main || -n "$working_status" ]]; then
    printf 'Checkout has local changes or is not on main; leaving it unchanged: %s\n' "$target" >&2
    return 1
  fi
  git -C "$target" fetch --no-tags origin main || return
  git -C "$target" merge --ff-only FETCH_HEAD
}

failed=0
download_site 'https://github.com/shalev-os/oshercc.git' 'osher.cc' || failed=1
download_site 'https://github.com/shalev-os/mazonhaosher.git' 'mazonhaosher.co.il' || failed=1

if (( failed )); then
  printf '\nAt least one download/update failed. Review the messages above.\n' >&2
  exit 1
fi
printf '\nSources are ready:\n  %s/osher.cc\n  %s/mazonhaosher.co.il\n' "$destination" "$destination"
