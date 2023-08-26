import { CadastroDeFarmacia } from "../../components/CadastroDeFarmacia";
import { NavBar } from "../../components/Header";
import { PuxarCoordenadas } from "../../components/Maps/PuxarCoordenadas";


function CadastroFarmaciaPage (){

    return(
        <div>
        <NavBar/>
        <CadastroDeFarmacia/>
        <PuxarCoordenadas/>       
        </div>
        
    )
}
export { CadastroFarmaciaPage };