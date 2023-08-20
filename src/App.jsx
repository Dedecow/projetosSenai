import './App.css';
import React from 'react';
import { MapaDeFarmaciasPage } from './pages/mapaDeFarmacias';
import {Outlet} from "react-router-dom"
import { NavBar } from './components/Header'
import { CadastroFarmaciaPage } from './pages/cadastroDeFarmacias'


function App() {

  return (
    <>
      <NavBar/>
      <Outlet/>
      <CadastroFarmaciaPage/>
      <MapaDeFarmaciasPage/>
      
    </>
  )
}

export default App
