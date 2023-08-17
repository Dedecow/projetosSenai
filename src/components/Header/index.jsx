import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled, NavStyled } from "./styled";

function Header() {
  const pages = [
    {
      route: "/cadastroMedicamentos",
      description: "Cadastro de Medicamentos"
    },
    {
      route: "/login",
      description: "Login"
    }
  ];

  return (
    <HeaderStyled>
      <h3>Cabeçalho</h3>
      <NavStyled>
        {pages.map(({ route, description }) => (
          <Link key={route} to={route}>
            {description}
          </Link>
        ))}
      </NavStyled>
    </HeaderStyled>
  );
}

export { Header };
