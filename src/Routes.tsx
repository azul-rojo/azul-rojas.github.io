import { createHashRouter, Outlet } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import { Home } from './Pages/home';
import { Menu } from "./component/Menu";
import { MENU_PROPS } from "./constants/menu";
import { useContext, useState } from "react";
import classNames from "classnames";
import styles from './styles.module.scss';
import { SurvivalKits } from "./Pages/survivalkits";


interface RootProps {
  children?: React.ReactNode;
}

// TODO: this should be it's own component. where should we put this?
const Root = ({ children }: RootProps) => { 
  const { theme } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className={classNames(styles.app, styles[theme])}>
      <Menu {...MENU_PROPS} theme={theme} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={classNames(styles.main, styles[theme], {[styles.isOpen]: isOpen})}>
        {children ? children : <Outlet />}
      </div>
    </main>
  );
}

export const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Root><div>404: TODO: make 404 page</div></Root>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: "survivalkits",
        element: <SurvivalKits />,
      },
    ]
  },
]);
