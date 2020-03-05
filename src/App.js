import React from 'react';
import Home from './pages/Home';
import Photos from './pages/Photos';
import TeamsPage from './pages/TeamsPage';
import About from './pages/About';
import FreeFire from './pages/FreeFire';
import Fortnite from './pages/Fortnite';
import Pubg from './pages/Pubg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/fotos">
          <Photos />
        </Route>
        <Route path="/equipes" exact>
          <TeamsPage />
        </Route>
        <Route path="/equipe/freefire">
          <FreeFire />
        </Route>
        <Route path="/equipe/fortnite">
          <Fortnite />
        </Route>
        <Route path="/equipe/pubg">
          <Pubg />
        </Route>
        <Route path="/sobre">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
