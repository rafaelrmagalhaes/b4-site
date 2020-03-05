import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../assets/images/banner-equipe-freefire.png';

function FreeFire() {
  return (
    <>
      <Header />
      <img src={banner} alt="Free Fire" className="banner-page" />
      <div className="arrows">
        <a href="fortnite" className="left"></a>
        <a href="pubg" className="right"></a>

        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
      <section id="page-team" className="col-md-9 mx-auto">
        <ul className="row">
          <li className="col-4">
            <div className="member">
              <img src="http://placehold.it/250x275" alt="Foto" />
              <a href="#" className="video"><span></span></a>
              <ul className="social">
                <li>
                  <a href="#"><span></span></a>
                </li>
                <li>
                  <a href="#"><span className="instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span className="twitter"></span></a>
                </li>
              </ul>
              <div className="info">
                <p>Aline Farias</p>
                <p className="name">Aline</p>
              </div>
            </div>
          </li>
          <li className="col-4">
            <div className="member">
              <img src="http://placehold.it/250x275" alt="Foto" />
              <a href="#" className="video"><span></span></a>
              <ul className="social">
                <li>
                  <a href="#"><span></span></a>
                </li>
                <li>
                  <a href="#"><span className="instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span className="twitter"></span></a>
                </li>
              </ul>
              <div className="info">
                <p>Aline Farias</p>
                <p className="name">Aline</p>
              </div>
            </div>
          </li>
          <li className="col-4">
            <div className="member">
              <img src="http://placehold.it/250x275" alt="Foto" />
              <a href="#" className="video"><span></span></a>
              <ul className="social">
                <li>
                  <a href="#"><span></span></a>
                </li>
                <li>
                  <a href="#"><span className="instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span className="twitter"></span></a>
                </li>
              </ul>
              <div className="info">
                <p>Aline Farias</p>
                <p className="name">Aline</p>
              </div>
            </div>
          </li>
          <li className="col-4">
            <div className="member">
              <img src="http://placehold.it/250x275" alt="Foto" />
              <a href="#" className="video"><span></span></a>
              <ul className="social">
                <li>
                  <a href="#"><span></span></a>
                </li>
                <li>
                  <a href="#"><span className="instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span className="twitter"></span></a>
                </li>
              </ul>
              <div className="info">
                <p>Aline Farias</p>
                <p className="name">Aline</p>
              </div>
            </div>
          </li>
          <li className="col-4">
            <div className="member">
              <img src="http://placehold.it/250x275" alt="Foto" />
              <a href="#" className="video"><span></span></a>
              <ul className="social">
                <li>
                  <a href="#"><span></span></a>
                </li>
                <li>
                  <a href="#"><span className="instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span className="twitter"></span></a>
                </li>
              </ul>
              <div className="info">
                <p>Aline Farias</p>
                <p className="name">Aline</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default FreeFire;
