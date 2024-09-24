import {create, type StateCreator} from 'zustand';
export interface ThemeState {
  currentTheme: 'dark' | 'light';
  isDark: boolean;
  setCurrentTheme: (theme: 'dark' | 'light') => void;
}

const store: StateCreator<ThemeState> = (set) => ({
  currentTheme: 'dark',
  isDark: true,
  setCurrentTheme: (theme: 'dark' | 'light') => {
    set({
      currentTheme: theme,
    });
  },
});

export const useThemeStore = create<ThemeState>()(store);
