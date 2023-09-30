import {
  createHashRouter,
} from "react-router-dom";
import { Home } from './Pages/home';

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/survivalkits",
    element: <div>about</div>,
  },
  {
    path: "/contact",
    element: <div>contact</div>,
  }
]);
