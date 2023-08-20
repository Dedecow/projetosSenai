import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import { MapaDeFarmaciasPage } from './pages/mapaDeFarmacias';
import { CadastroFarmaciaPage } from './pages/cadastroDeFarmacias'
import { MedicamentosPage } from './pages/medicamentos';
import { CadastroDeMedicamentosPage } from './pages/cadastroDeMedicamentos';
import { LoginPage } from './pages/login';


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/medicamentos" element={<MedicamentosPage/>}/>
            <Route path="/cadastrar-medicamentos" element={<CadastroDeMedicamentosPage/>}/>
            <Route path="/cadastrar-farmacias"element={<CadastroFarmaciaPage/>}/>
            <Route path="/map" element={<MapaDeFarmaciasPage/>}/>
          </Routes>
      </Router>  
    </>
  )
}

export default App;
