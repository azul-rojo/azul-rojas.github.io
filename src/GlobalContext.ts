import { createContext } from 'react';
import { Theme } from './constants/theme';

interface Context {
  theme: Theme;
}

export const initialContext: Context = {
  theme: Theme.dark,
}

export const GlobalContext = createContext(initialContext);
