import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../assets/images/banner-fotos.png';

function Photos() {
  return (
    <>
      <Header />
      <img src={banner} alt="Fotos" className="banner-page" />
      <section id="page-photos" className="col-md-9 mx-auto">
        <ul className="row">
          <li className="col-4">
            <img src="http://placehold.it/315x315" alt="Lorem Ipsum" />
          </li>
          <li className="col-4">
            <img src="http://placehold.it/315x315" alt="Foto" />
          </li>
          <li className="col-4">
            <img src="http://placehold.it/315x315" alt="Foto" />
          </li>
          <li className="col-4">
            <img src="http://placehold.it/315x315" alt="Foto" />
          </li>
          <li className="col-4">
            <img src="http://placehold.it/315x315" alt="Foto" />
          </li>
          <li className="col-4">
            <img src="http://placehold.it/315x315" alt="Foto" />
          </li>
          <li className="col-4">
            <img src="http://placehold.it/315x315" alt="Foto" />
          </li>
          <li className="col-4">
            <img src="http://placehold.it/315x315" alt="Foto" />
          </li>
          <li className="col-4">
            <img src="http://placehold.it/315x315" alt="Foto" />
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default Photos;
