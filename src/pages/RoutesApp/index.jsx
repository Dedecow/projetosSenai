import React from "react";
import { Routes, Route } from "react-router-dom";
import { CadastroDeMedicamentosPage } from "../cadastroDeMedicamentos";
import { LoginPage } from "../login";
import { MedicamentosPage } from "../medicamentos";
import { MapaDeFarmaciasPage } from "../mapaDeFarmacias"
import {createBrowser, RouterProvider} from "react-router-dom";
import App from "../../App";
import ReactDOM from "react-dom/client";

const router = createBrowser([
  {
    path: "/login", 
    element: <App/>,
    // errorElement:
    children: [
      {path:"/cadastroDeMedicamentos", element:<CadastroDeMedicamentosPage />},
      {path:"/cadastroDeFarmacias", element:<LoginPage />},
      {path:"/medicamentos", element:< MedicamentosPage/>},
      { path:"/map", element:< MapaDeFarmaciasPage />}
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);


// function RoutesApp() {

//   return (
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/cadastroDeMedicamentos" element={<CadastroDeMedicamentosPage />} />
//       <Route path="/cadastroDeFarmacias" element={<LoginPage />} />
//       <Route path="/medicamentos" element={< MedicamentosPage/>} />
//       <Route path="/map" element={< MapaDeFarmaciasPage />} />
//     </Routes>
//   );
// }


export { RoutesApp };
