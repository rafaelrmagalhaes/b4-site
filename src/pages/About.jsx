import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../assets/images/banner-sobre.png';
import banner2 from '../assets/images/banner-sobre-content.png';

function Photos() {
  return (
    <>
      <Header />
      <img src={banner} alt="Sobre nós" className="banner-page" />
      <section id="page-about" className="col-md-9 mx-auto">
        <img src={banner2} alt="Sobre nós" className="banner-content" />

        <h2>Nossa história</h2>

        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <div className="data">
          <p><span>2015</span> fundado</p>
          <p><span>30</span> atletas</p>
          <p><span>3</span> equipes</p>
        </div>

        <ul className="row">
          <li className="col-4">
            <div className="member">
              <img src="http://placehold.it/250x275" alt="Foto" />
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
                <p>CEO</p>
                <p className="name">Lorem Ipsum</p>
              </div>
            </div>
          </li>
          <li className="col-4">
            <div className="member">
              <img src="http://placehold.it/250x275" alt="Foto" />
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
                <p>CEO</p>
                <p className="name">Lorem Ipsum</p>
              </div>
            </div>
          </li>
          <li className="col-4">
            <div className="member">
              <img src="http://placehold.it/250x275" alt="Foto" />
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
                <p>CEO</p>
                <p className="name">Lorem Ipsum</p>
              </div>
            </div>
          </li>
          <li className="col-4">
            <div className="member">
              <img src="http://placehold.it/250x275" alt="Foto" />
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
                <p>CEO</p>
                <p className="name">Lorem Ipsum</p>
              </div>
            </div>
          </li>
          <li className="col-4">
            <div className="member">
              <img src="http://placehold.it/250x275" alt="Foto" />
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
                <p>CEO</p>
                <p className="name">Lorem Ipsum</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default Photos;
