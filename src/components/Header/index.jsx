import { Link } from "react-router-dom";

function NavBar() {
  // const pages = [
  //   {
  //     route: "/cadastroMedicamentos",
  //     description: "Página de Cadastro de Medicamentos"
  //   },
  //   {
  //     route: "/login",
  //     description: "Página de Login"
  //   },
  //   {
  //     route: "/cadastroDeFarmacias",
  //     description: "Página de cadastro das farmácias"
  //   },
  //   {
  //     route: "/medicamentos",
  //     description: "Página de Relatório dos ítens cadastrados"
  //   },
  //   {
  //     route: "/mapaDeFarmacias",
  //     description: "Página de localização das fármácias cadastradas"
  //   }
  // ];

  return (
    <nav >
      <Link to="/map"></Link>
      <Link to="/cadastroDeMedicamento"></Link>
      <Link to="/cadastroDeFarmacias"></Link>
      <Link to="/medicamentos"></Link>
    </nav>
    
  );

  
}

export { NavBar };
