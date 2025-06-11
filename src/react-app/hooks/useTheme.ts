import { useState, useEffect } from 'react';
import { 
  Theme, 
  getStoredTheme, 
  setTheme as setThemeUtil, 
  toggleTheme as toggleThemeUtil,
  getEffectiveTheme,
  initializeTheme,
  applyCSSVariables
} from '../utils/theme';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme());
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>(() => 
    getEffectiveTheme(getStoredTheme())
  );

  // Initialize theme on mount
  useEffect(() => {
    initializeTheme();
    const effective = getEffectiveTheme(theme);
    setEffectiveTheme(effective);
    applyCSSVariables(effective);
  }, []);

  // Update effective theme when theme changes
  useEffect(() => {
    const effective = getEffectiveTheme(theme);
    setEffectiveTheme(effective);
    applyCSSVariables(effective);
  }, [theme]);

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    if (theme !== 'auto') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const effective = getEffectiveTheme('auto');
      setEffectiveTheme(effective);
      applyCSSVariables(effective);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeUtil(newTheme);
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = toggleThemeUtil();
    setThemeState(newTheme);
  };

  return {
    theme,
    effectiveTheme,
    setTheme,
    toggleTheme,
    isDark: effectiveTheme === 'dark',
    isLight: effectiveTheme === 'light',
  };
}
