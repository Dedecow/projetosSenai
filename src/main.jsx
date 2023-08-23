import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import { LoginPage } from "./pages/login";
// import { MapaDeFarmaciasPage } from "./pages/mapaDeFarmacias";
import App from "./App";
// import { CadastroDeMedicamentosPage } from "./pages/cadastroDeMedicamentos";
// import { CadastroFarmaciaPage } from "./pages/cadastroDeFarmacias";
// import { MedicamentosPage } from "./pages/medicamentos";


// const router = createBrowserRouter([
//   {
//     path: "/", 
//     element: <App/>,
//     children: [
//     {path:"/login", element:<LoginPage />}, 
//     {path:"/cadastroDeMedicamentos", element:<CadastroDeMedicamentosPage />},
//     {path:"/cadastroFarmacias", element:<CadastroFarmaciaPage />},
//     {path:"/medicamentos", element:< MedicamentosPage/>},
//     {path:"/map", element:< MapaDeFarmaciasPage />}
//     ]
//   }
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);