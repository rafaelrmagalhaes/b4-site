import React from 'react';
import logo from '../assets/images/logo.png';

const Header = () => (
    <header className="container">
        <div className="row">
            <div className="col">
                <a href={`${process.env.PUBLIC_URL}`}><img className="logo" src={logo} alt="B4STARDOS" /></a>
            </div>
            <nav className="col-10">
                <ul className="menu">
                    <li><a href="fotos">Fotos</a></li>
                    <li><a href="equipes">Equipes</a></li>
                    {/* <li><a href="loja">Loja</a></li> */}
                    <li><a href="sobre">Sobre Nós</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;