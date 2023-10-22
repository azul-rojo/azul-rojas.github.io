import { RouterProvider} from "react-router-dom";
import { router } from './Routes';
import { Menu } from './component/Menu';
import { MENU_PROPS } from './constants/menu';
import styles from './styles.module.scss';
import { GlobalContext, initialContext } from './GlobalContext';
import { useContext } from "react";
import classNames from "classnames";

function App() {
  const { theme } = useContext(GlobalContext);

  return (
    <GlobalContext.Provider value={initialContext}>
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
