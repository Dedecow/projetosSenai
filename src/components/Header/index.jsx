import { Link } from "react-router-dom";
import './styled.css';

function NavBar() {
  return (
    <header className="navbar">
      <nav className="container">
        <ul className="nav-list">
        <li className="nav-item">
            <Link to="/login" className="nav-link">Tela Inicial</Link>
          </li>
          <li className="nav-item">
            <Link to="/cadastrar-medicamentos" className="nav-link">Cadastrar Medicamentos</Link>
          </li>
          <li className="nav-item">
            <Link to="/cadastrar-farmacias" className="nav-link">Cadastrar Farmácias</Link>
          </li>
          <li className="nav-item">
            <Link to="/medicamentos" className="nav-link">Listar Medicamentos</Link>
          </li>
          <li className="nav-item">
            <Link to="/map" className="nav-link">Mapa de Farmácias</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { NavBar };
