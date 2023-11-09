import { RouterProvider} from "react-router-dom";
import { router } from './Routes';
import { Menu } from './component/Menu';
import { MENU_PROPS } from './constants/menu';
import styles from './styles.module.scss';
import { GlobalContext } from './GlobalContext';
import classNames from "classnames";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <GlobalContext.Provider value={{ theme }}>
      <main className={classNames(styles.app, styles[theme])}>
        <Menu {...MENU_PROPS} theme={theme} />
        <div className={classNames(styles.main, styles[theme])}>
          <RouterProvider router={router} />
        </div>
      </main>
    </GlobalContext.Provider>
  );
}

export default App;
