import React, { Fragment } from "react";
import Logo from "../../styles/imgs/logo-limpa-golden.png";
import "./index.scss";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="logo">
          <img src={Logo} alt="logo empresarial" />
        </div>
        <p>
          "Uma jornada em busca do melhor
          <br /> lar para vocês" - CEO Guilherme Nunes
        </p>

        <div className="group">
          <p>Email: nunez@company.com</p>
          <p>Telefone: +34 91 123 45 67</p>
        </div>


      </footer>
      <div className="subFooter">
        <p>
          &copy; {new Date().getFullYear()} Nuñez. Todos os direitos reservados.
        </p>
        <ul>
        <li>Termos de uso</li>
        <li>Politicas de Privacidade</li>
        <li>Politicas de Cookies</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Footer;
