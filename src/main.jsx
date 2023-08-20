import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { LoginPage } from "./pages/login";
// import { MedicamentosPage } from "./pages/medicamentos";
// import { CadastroDeMedicamentosPage } from "./pages/cadastroDeMedicamentos"
// import { CadastroFarmaciaPage } from "./pages/cadastroDeFarmacias";
import { MapaDeFarmaciasPage } from "./pages/mapaDeFarmacias";
import App from "./App";
import { NavBar } from "./components/Header";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
    children: [
    {path:"/", element:<LoginPage />}, {path:"/", element:<NavBar />},
      // {path:"/cadastroDeMedicamentos", element:<CadastroDeMedicamentosPage />},
      // {path:"/cadastroFarmacias", element:<CadastroFarmaciaPage />},
      // {path:"/medicamentos", element:< MedicamentosPage/>},
      {path:"/map", element:< MapaDeFarmaciasPage />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);