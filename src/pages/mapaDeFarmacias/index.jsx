import { AtualizarCoordenadas } from "../../components/CadastroDeFarmacia/AtualizarCoordenadas";
import { NavBar } from "../../components/Header";
import { MapComponent } from "../../components/Maps";


function MapaDeFarmaciasPage (){

    return(
        <>
        <NavBar/>
        <AtualizarCoordenadas/>
        <MapComponent/>
        </>
        
    );
}
export { MapaDeFarmaciasPage}