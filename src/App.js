import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Streams from './components/Streams';
import Updates from './components/Updates';
import Teams from './components/Teams';
import './App.scss';
import Footer from './components/Footer';
import Championships from './components/Championships';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Streams />
      <Updates />
      <Championships />
      <Teams />
      <Footer />
    </>
  );
}

export default App;
