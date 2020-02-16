import React from 'react';
import nimo from '../assets/images/logos/nimo.png';

const Streams = () => (
    <section id="streams" className="container">
        <div class="row">
            <div className="col">
                <h2>Transmissões ao vivo</h2>
                <div className="nimo">
                    <span>Powered By</span>
                    <img src={nimo} width="120" alt="Nimo TV" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col stream">
                <span></span>
            </div>
            <div className="col stream">
                <span></span>
            </div>
        </div>
    </section>
);

export default Streams;