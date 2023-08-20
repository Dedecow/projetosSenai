import { Link } from "react-router-dom";

function NavBar() {
  

  return (
    <nav className="container">
      <ul>
        <li className="li"><Link to="/map">Mapa de Farmácias</Link></li>
        <li className="li"><Link to="/cadastroDeMedicamento">Cadastrar Medicamentos</Link></li>
        <li className="li"><Link to="/cadastroDeFarmacias">Cadastrar Farmácias</Link></li>
        <li className="li"><Link to="/medicamentos">Listar Medicamentos</Link></li>
        <li className="li"><Link to="/Login">Tela Inicial</Link></li>
      </ul>
      
      
      
      
    </nav>
    
  );

  
}

export { NavBar };
