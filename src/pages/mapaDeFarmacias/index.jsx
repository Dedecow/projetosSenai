import { NavBar } from "../../components/Header";
import { MapComponent } from "../../components/Maps";
import { PuxarCoordenadas } from "../../components/Maps/PuxarCoordenadas";

function MapaDeFarmaciasPage (){

    return(
        <>
        <NavBar/>
        <MapComponent/>
        <PuxarCoordenadas/>
        </>
        
    );
}
export { MapaDeFarmaciasPage}