import React from 'react';

import Pokemones from './componentes/Pokemones';
import Navbar from "./componentes/Navbar"
import Login from "./componentes/Login"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <Navbar />

        <Switch>
          <Route component={Pokemones} path="/" exact />
          <Route component={Login} path="/login" exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



