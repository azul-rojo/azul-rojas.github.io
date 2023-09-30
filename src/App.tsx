import { RouterProvider} from "react-router-dom";
import { router } from './Routes';
import { Menu } from './component/Menu';
import { MENU_PROPS } from './constants/menu';
import styles from './styles.module.scss';

function App() {
  return (
    <main className={styles.app}>
      <Menu {...MENU_PROPS} />
      <div className={styles.main}>
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
