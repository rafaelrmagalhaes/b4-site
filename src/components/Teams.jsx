import React from 'react';
import freeFire from '../assets/images/banner-free-fire.jpg';
import fortnite from '../assets/images/banner-fortnite.jpg';
import pubg from '../assets/images/banner-pubg.jpg';

const Teams = () => (
    <section id="teams" className="col-md-8 mx-auto">
        <h3>Equipes</h3>
        <ul className="row">
            <li className="col-md-4">
                <a href="#">
                    <img src={freeFire} alt="Free Fire" />
                </a>
            </li>
            <li className="col-md-4">
                <a href="#">
                    <img src={fortnite} alt="Fortnite" />
                </a>
            </li>
            <li className="col-md-4">
                <a href="#">
                    <img src={pubg} alt="PUBG" />
                </a>
            </li>
        </ul>
    </section>
);

export default Teams;