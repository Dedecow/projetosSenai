import React from "react";
import { Routes, Route } from "react-router-dom";
import { CadastroDeMedicamentosPage } from "../pages/cadastroDeMedicamentos";
import { LoginPage } from "../pages/login";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/cadastroMedicamentos" element={<CadastroDeMedicamentosPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export { RoutesApp };
