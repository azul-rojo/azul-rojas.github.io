import { useEffect, useState } from "react";
import { Theme } from "../constants/theme";

const isSystemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(isSystemDarkTheme.matches ? Theme.dark : Theme.light)
  const [isSetBySystem, setIsSetBySystem] = useState<boolean>(true);
  
  useEffect(() => {
    const setNextSystemTheme = ({ matches }: { matches: boolean}) => {
      if (isSetBySystem) {
        const themeSet = matches ? Theme.dark : Theme.light;
        setTheme(themeSet);
      }
    }

    isSystemDarkTheme.addEventListener('change', setNextSystemTheme);

    return () => isSystemDarkTheme.removeEventListener('change', setNextSystemTheme);
  }, [isSetBySystem, setIsSetBySystem]);


  const toggleTheme = (theme: Theme | 'System') => {
    if (theme === 'System') {
      setIsSetBySystem(true);
    } else {
      setTheme(theme);
      setIsSetBySystem(false);
    }
  }

  return { theme, toggleTheme };
}
