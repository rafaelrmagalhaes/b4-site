import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../assets/images/banner-equipes.png';
import Championships from '../components/Championships';
import Teams from '../components/Teams';

function TeamsPage() {
  return (
    <>
      <Header />
      <img src={banner} alt="Fotos" className="banner-page" />
      <section id="page-teams" className="col-md-9 mx-auto">
        <h2>Equipes por jogo</h2>
        <Teams />
        <Championships />
      </section>
      <Footer />
    </>
  );
}

export default TeamsPage;
