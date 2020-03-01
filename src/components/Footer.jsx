import React from 'react';
import nimo from '../assets/images/logos/nimo.png';
import social from '../assets/images/logos/social.png';
import logo from '../assets/images/logo.png';

const Footer = () => (
    <section id="footer">
        <section id="sponsors">
            <div className="col-md-9 mx-auto">
                <ul>
                    <li><img src={nimo} alt="Nimo TV" /></li>
                    <li><img src={nimo} alt="Nimo TV" /></li>
                    <li><img src={nimo} alt="Nimo TV" /></li>
                    <li><img src={nimo} alt="Nimo TV" /></li>
                    <li><img src={nimo} alt="Nimo TV" /></li>
                    <li><img src={nimo} alt="Nimo TV" /></li>
                </ul>
            </div>
        </section>

        <div className="container">
            <div className="row wrapper">
                <a href="/"><img className="logo" src={logo} alt="B4STARDOS" /></a>
                <nav>
                    <ul>
                        <li><a href="#"><img src={social} alt="Redes Sociais" /></a></li>
                    </ul>
                </nav>
                <p><strong>B4STARDOS</strong> 2015 - 2020® Todos os Direitos Reservados.</p>
            </div>
        </div>
    </section>
);

export default Footer;