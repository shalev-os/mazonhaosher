import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function TopToolbar() {
  const { mode, toggleTheme } = useTheme();
  const themeLabel = mode === 'light' ? 'בהיר' : 'כהה';
  return (
    <nav aria-label="ניווט ראשי" className="fixed inset-x-0 top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-3 px-4 py-2">
        <a href="/#main-content" className="font-display text-lg text-foreground shrink-0">מזון האושר</a>
        <a href="/#flavors" className="text-sm font-medium rounded-lg px-3 py-2 hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">הטעמים שלנו</a>
        <button onClick={toggleTheme} aria-label={`מצב תצוגה: ${themeLabel}`} title={themeLabel} className="flex items-center justify-center rounded-full w-11 h-11 shrink-0 hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          {mode === 'light' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
      </div>
    </nav>
  );
}
