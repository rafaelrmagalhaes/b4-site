import React from 'react';
import logo from '../assets/images/logo.png';

const Header = () => (
    <header className="container">
        <div className="row">
            <div className="col">
                <img className="logo" src={logo} alt="B4STARDOS" />
            </div>
            <nav className="col-10">
                <ul className="menu">
                    <li><a href="#">Fotos</a></li>
                    <li><a href="#">Equipes</a></li>
                    <li><a href="#">Loja</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;