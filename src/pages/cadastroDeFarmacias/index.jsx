import { CadastroDeFarmacia } from "../../components/CadastroDeFarmacia";
import { AtualizarCoordenadas } from "../../components/CadastroDeFarmacia/AtualizarCoordenadas";
import { PegarCepCadastro } from "../../components/CadastroDeFarmacia/PegarCepCadastro";
import { NavBar } from "../../components/Header";


function CadastroFarmaciaPage (){

    return(
        <div>
        <NavBar/>
        <CadastroDeFarmacia/> 
        </div>
        
    )
}
export { CadastroFarmaciaPage };