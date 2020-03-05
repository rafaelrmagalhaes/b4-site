import React from 'react';
import b4stardinhos from '../assets/images/logos/b4stardinhos.png';
import b4stardos from '../assets/images/logos/b4stardos.png';
import intz from '../assets/images/logos/intz.png';

const Championships = () => (
    <section id="championships">
        <div className="row">
            <div className="col">
                <h3>Campeonatos atuais</h3>
            </div>
        </div>
        <div className="row championship">
            <div className="col-2 logo">
                <img src={b4stardinhos} alt="B4stardinhos" />
            </div>
            <div className="col info">
                <p className="name">B4STARDINHOS</p>
                <p className="date">01 de Jan de 2020 - 23:59</p>
                <img src={intz} alt="INTZ" />
                <span className="vs">VS</span>
                <img src={b4stardos} alt="B4stardos" />
            </div>
            <div className="col-2 see-more">
                <a href="#">Ver mais <span>+</span></a>
            </div>
        </div>
        <div className="row championship">
            <div className="col-2 logo">
                <img src={b4stardinhos} alt="B4stardinhos" />
            </div>
            <div className="col info">
                <p className="name">B4STARDINHOS</p>
                <p className="date">01 de Jan de 2020 - 23:59</p>
                <img src={intz} alt="INTZ" />
                <span className="vs">VS</span>
                <img src={b4stardos} alt="B4stardos" />
            </div>
            <div className="col-2 see-more">
                <a href="#">Ver mais <span>+</span></a>
            </div>
        </div>
    </section>
);

export default Championships;