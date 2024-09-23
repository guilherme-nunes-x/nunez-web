import React from 'react';
import Logo from '../../styles/imgs/logo-limpa-golden.png';
import './index.scss';

const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo empresarial" />
        </div>
        <ul>
          <li>Cadastro|Login</li>
        </ul>
      </nav>
    </>
  );
}

export default Header; 