import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreatePage from './pages/CreatePage.tsx';
import CanYouSeeMe from './pages/CanYouSeeMeInfo.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "createpage",
    element: <CreatePage/>,
  },
  {
    path: "canyouseeme", //ideally, it would work like "tool/{name}", try to implement later
    element: <CanYouSeeMe/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
