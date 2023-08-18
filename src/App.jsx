import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { CadastroFarmaciaPage } from "./pages/cadastroDeFarmacias";
import { CadastroDeMedicamentosPage} from "./pages/cadastroDeMedicamentos";
import { MapaDeFarmaciasPage } from "./pages/mapaDeFarmacias"
import { MedicamentosPage } from "./pages/medicamentos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/cadastro-farmacia" component={CadastroFarmaciaPage} />
        <Route path="/cadastro-medicamento" component={CadastroDeMedicamentosPage} />
        <Route path="/mapa" component={MapaDeFarmaciasPage} />
        <Route path="/lista-medicamentos" component={MedicamentosPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
