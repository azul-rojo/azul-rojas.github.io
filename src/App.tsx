import { RouterProvider} from "react-router-dom";
import { router } from './Routes';
import { GlobalContext } from './GlobalContext';
import { useTheme } from "./hooks/useTheme";



function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme }}>
          <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
}

export default App;
