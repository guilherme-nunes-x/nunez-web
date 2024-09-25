import React, { Fragment } from "react";
import Logo from "../../styles/imgs/logo-limpa-golden.png";
import "./index.scss";

const Header = () => {
  return (
    <Fragment>
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo empresarial" />
        </div>
        <ul>
          <li>Cadastro|Login</li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Header;
