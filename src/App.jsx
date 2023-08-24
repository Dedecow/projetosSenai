import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { NavBar } from './components/Header'
import { LoginPage } from './pages/login';
import { CadastroFarmaciaPage } from './pages/cadastroDeFarmacias'
import { CadastroDeMedicamentosPage } from './pages/cadastroDeMedicamentos';
import { MedicamentosPage } from './pages/medicamentos';
import { MapaDeFarmaciasPage } from './pages/mapaDeFarmacias';
import { Maps } from './components/Maps';
import MapComponent from './MapComponent'; // Importando o componente MapComponent

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/medicamentos" element={<MedicamentosPage />} />
          <Route path="/cadastrar-medicamentos" element={<CadastroDeMedicamentosPage />} />
          <Route path="/cadastrar-farmacias" element={<CadastroFarmaciaPage />} />
          <Route path="/map" element={<MapaDeFarmaciasPage />} />
        </Routes>
      </Router>
      
      <MapComponent /> 
    </div>
  );
}

export default App;
