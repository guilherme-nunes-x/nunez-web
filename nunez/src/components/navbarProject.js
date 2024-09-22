import logo from './logo-limpa-golden.png';
import "../styles/navbar/navbar.css";
function NavbaProject() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="app.js"><img src={logo} alt="Logo" /></a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Propriedades</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Sobre Nós</a>
        </li>
      </ul>
      <a href="#" className="cta-button">
        Agende uma Visita
      </a>
    </nav>
  );
}
export default NavbaProject;
