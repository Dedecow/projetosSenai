import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const pages = [
    {
      route: "/cadastroMedicamentos",
      description: "Cadastro de Medicamentos"
    },
    {
      route: "/login",
      description: "Página de Login"
    }
  ];

  return (
    <form className="container">
      <h3>Cabeçalho</h3>
          {pages.map(({ route, description }) => (
            <Link key={route} to={route}>
              {description}
            </Link>
          ))}
    </form>

  );

  
}

export { Header };
