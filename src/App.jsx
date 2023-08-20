import './App.css';
import {Outlet} from "react-router-dom"
import React from 'react';
import { MapaDeFarmaciasPage } from './pages/mapaDeFarmacias';
import { NavBar } from './components/Header'
import { CadastroFarmaciaPage } from './pages/cadastroDeFarmacias'
import { MedicamentosPage } from './pages/medicamentos';


function App() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <MedicamentosPage/>
      <CadastroFarmaciaPage/>
      <MapaDeFarmaciasPage/>
      
    </>
  )
}

export default App;
