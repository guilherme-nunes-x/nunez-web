import logo from './logo-limpa-golden.png';
import "../styles/navbar/navbar.css";
function NavbaProject() {
  return (
    <nav class="navbar">
      <div class="logo">
        <a href="app.js"><img src={logo} alt="Logo" /></a>
      </div>
      <ul class="nav-links">
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
      <a href="#" class="cta-button">
        Agende uma Visita
      </a>
    </nav>
  );
}
export default NavbaProject;
