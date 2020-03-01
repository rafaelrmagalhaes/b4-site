import React from 'react';
import Home from './pages/Home';
import Photos from './pages/Photos';
import Teams from './pages/Teams';
import About from './pages/About';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/fotos">
          <Photos />
        </Route>
        <Route path="/equipes">
          <Teams />
        </Route>
        <Route path="/sobre">
          <About />
        </Route>
      </Switch>
    </Router>
    // <>
    //   <Header />
    //   <Banner />
    //   <Streams />
    //   <Updates />
    //   <Championships />
    //   <Teams />
    //   <Footer />
    // </>
  );
}

export default App;
