import { RouterProvider} from "react-router-dom";
import { router } from './Routes';
import { Menu } from './component/Menu';
import { MENU_PROPS } from './constants/menu';
import styles from './styles.module.scss';
import { GlobalContext } from './GlobalContext';
import classNames from "classnames";
import { useTheme } from "./hooks/useTheme";
import { useState } from "react";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme }}>
      <main className={classNames(styles.app, styles[theme])}>
        <Menu {...MENU_PROPS} theme={theme} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={classNames(styles.main, styles[theme], {[styles.isOpen]: isOpen})}>
          <RouterProvider router={router} />
        </div>
      </main>
    </GlobalContext.Provider>
  );
}

export default App;
