import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Streams from './components/Streams';
import Updates from './components/Updates';
import Teams from './components/Teams';
import './App.scss';

function App() {
  return (
    // <div className="container-fluid">
    <>
      <Header />
      <Banner />
      <Streams />
      <Updates />
      <Teams />
    </>
    // </div>
  );
}

export default App;
