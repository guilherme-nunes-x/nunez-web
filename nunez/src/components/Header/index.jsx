import React from 'react';
import Logo from '../../styles/imgs/logo-limpa-golden.png';
import './index.scss';

export default function Header() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo empresarial" />
        </div>
      </nav>
    </>
  );
}