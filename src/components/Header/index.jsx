import { Link } from "react-router-dom";

function HeaderComponent() {
  const pages = [
    {
      route: "/cadastroMedicamentos",
      description: "Página de Cadastro de Medicamentos"
    },
    {
      route: "/login",
      description: "Página de Login"
    },
    {
      route: "/cadastroDeFarmacias",
      description: "Página de cadastro das farmácias"
    },
    {
      route: "/medicamentos",
      description: "Página de Relatório dos ítens cadastrados"
    },
    {
      route: "/mapaDeFarmacias",
      description: "Página de localização das fármácias cadastradas"
    }
  ];

  return (
    <form className="container">
      <h3 className="titulo">Cabeçalho</h3>
          {pages.map(({ route, description }) => (
            <Link key={route} to={route}>
              {description}
            </Link>
          ))}
    </form>

  );

  
}

export { HeaderComponent };
