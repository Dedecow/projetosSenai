import './App.css'
import {Outlet} from "react-router-dom"
import { NavBar } from './components/Header'
import { CadastroFarmaciaPage } from './pages/cadastroDeFarmacias'


function App() {

  return (
    <>
      <NavBar/>
      {/* <Outlet/>
      <CadastroFarmaciaPage/> */}
      
    </>
  )
}

export default App
