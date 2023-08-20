import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { Map } from "./components/Maps"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { LoginPage } from "./pages/login";
import { MedicamentosPage } from "./pages/medicamentos";
import { CadastroDeMedicamentosPage } from "./pages/cadastroDeMedicamentos"
import { CadastroFarmaciaPage } from "./pages/cadastroDeFarmacias/index.jsx";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
    // errorElement:
    children: [
      {path:"/Login", element:<LoginPage />},
      // {path:"/cadastroDeMedicamentos", element:<CadastroDeMedicamentosPage />},
      // // {path:"/cadastroFarmacias", element:<CadastroFarmaciaPage />},
      // // {path:"/medicamentos", element:< MedicamentosPage/>},
      // // { path:"/map", element:< Map />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);
