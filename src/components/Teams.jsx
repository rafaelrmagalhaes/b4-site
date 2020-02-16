import React from 'react';
import freeFire from '../assets/images/banner-free-fire.jpg';
import fortnite from '../assets/images/banner-fortnite.jpg';
import pubg from '../assets/images/banner-pubg.jpg';

const Teams = () => (
    <section id="teams" className="col-md-7 mx-auto">
        <div className="row">
            <div className="col">
                <h3>Equipes</h3>
            </div>
        </div>
        <ul className="row">
            <li className="col">
                <a href="#">
                    <img src={freeFire} alt="Free Fire" />
                    <span className="see-team">Ver equipe</span>
                </a>
            </li>
            <li className="col">
                <a href="#">
                    <img src={fortnite} alt="Fortnite" />
                    <span className="see-team">Ver equipe</span>
                </a>
            </li>
            <li className="col">
                <a href="#">
                    <img src={pubg} alt="PUBG" />
                    <span className="see-team">Ver equipe</span>
                </a>
            </li>
        </ul>
    </section>
);

export default Teams;