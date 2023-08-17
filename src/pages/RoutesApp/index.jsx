import React from "react";
import { Routes, Route } from "react-router-dom";
import { CadastroDeMedicamentosPage } from "../cadastroDeMedicamentos";
import { LoginPage } from "../login";
import { MedicamentosPage } from "../medicamentos";
import { MapaDeFarmaciasPage } from "../mapaDeFarmacias"


function RoutesApp() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastroDeMedicamentos" element={<CadastroDeMedicamentosPage />} />
      <Route path="/cadastroDeFarmacias" element={<LoginPage />} />
      <Route path="/medicamentos" element={< MedicamentosPage/>} />
      <Route path="/mapaDeFarmacias" element={< MapaDeFarmaciasPage />} />
    </Routes>
  );
}

export { RoutesApp };
