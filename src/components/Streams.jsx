import React from 'react';
import nimo from '../assets/images/nimo.png';

const Streams = () => (
    <section id="streams" className="col-md-10 mx-auto">
        <h2>Transmissões ao vivo</h2>
        <div className="nimo">
            <span>Powered By</span>
            <img src={nimo} alt="Nimo TV" />
        </div>
        <div className="clearfix"></div>
        <div className="row">
            <div className="col-md-6 stream">
                <span></span>
            </div>
            <div className="col-md-6 stream">
                <span></span>
            </div>
        </div>

    </section>
);

export default Streams;