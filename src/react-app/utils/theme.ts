// Theme utility functions for managing light/dark modes and custom themes

export type Theme = 'light' | 'dark' | 'auto';

export const themes = {
  light: 'light',
  dark: 'dark',
  auto: 'auto',
} as const;

// Get the current theme from localStorage or default to 'auto'
export function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'auto';
  return (localStorage.getItem('theme') as Theme) || 'auto';
}

// Store theme preference in localStorage
export function setStoredTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme', theme);
}

// Get the effective theme (resolves 'auto' to 'light' or 'dark')
export function getEffectiveTheme(theme: Theme = getStoredTheme()): 'light' | 'dark' {
  if (theme === 'auto') {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return theme;
}

// Apply theme to document
export function applyTheme(theme: Theme = getStoredTheme()): void {
  if (typeof window === 'undefined') return;
  
  const effectiveTheme = getEffectiveTheme(theme);
  const root = window.document.documentElement;
  
  // Remove existing theme classes
  root.classList.remove('light', 'dark');
  
  // Add new theme class
  root.classList.add(effectiveTheme);
  
  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      'content',
      effectiveTheme === 'dark' ? '#0f172a' : '#ffffff'
    );
  }
}

// Initialize theme on app start
export function initializeTheme(): void {
  const storedTheme = getStoredTheme();
  applyTheme(storedTheme);
  
  // Listen for system theme changes when in auto mode
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', () => {
      const currentTheme = getStoredTheme();
      if (currentTheme === 'auto') {
        applyTheme(currentTheme);
      }
    });
  }
}

// Toggle between light and dark themes
export function toggleTheme(): Theme {
  const currentTheme = getStoredTheme();
  const effectiveTheme = getEffectiveTheme(currentTheme);
  const newTheme: Theme = effectiveTheme === 'light' ? 'dark' : 'light';
  
  setStoredTheme(newTheme);
  applyTheme(newTheme);
  
  return newTheme;
}

// Set specific theme
export function setTheme(theme: Theme): void {
  setStoredTheme(theme);
  applyTheme(theme);
}

// Theme CSS custom properties for easier theming
export const themeVariables = {
  light: {
    '--color-background': '#ffffff',
    '--color-background-paper': '#f8fafc',
    '--color-text-primary': '#0f172a',
    '--color-text-secondary': '#64748b',
    '--color-text-muted': '#94a3b8',
    '--color-border': '#e2e8f0',
    '--color-primary': '#3b82f6',
    '--color-secondary': '#64748b',
  },
  dark: {
    '--color-background': '#0f172a',
    '--color-background-paper': '#1e293b',
    '--color-text-primary': '#f8fafc',
    '--color-text-secondary': '#94a3b8',
    '--color-text-muted': '#64748b',
    '--color-border': '#334155',
    '--color-primary': '#60a5fa',
    '--color-secondary': '#94a3b8',
  },
};

// Apply CSS custom properties
export function applyCSSVariables(theme: 'light' | 'dark'): void {
  if (typeof window === 'undefined') return;
  
  const variables = themeVariables[theme];
  const root = document.documentElement;
  
  Object.entries(variables).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}
