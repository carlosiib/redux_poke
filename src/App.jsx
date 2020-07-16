import React, { useState, useEffect } from 'react';

import Pokemones from './componentes/Pokemones';
import Navbar from "./componentes/Navbar"
import Login from "./componentes/Login"
import Perfil from "./componentes/Perfil"

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { auth } from './firebase';

function App() {
  const [firebaseUser, setFireBaseUser] = useState(false)

  useEffect(() => {
    const fetchUser = () => {
      //read user data from google
      auth.onAuthStateChanged(user => {
        console.log(user)
        if (user) {
          setFireBaseUser(user)
        } else {
          setFireBaseUser(null)
        }
      })
    }
    fetchUser()
  }, [])

  const RutaPrivada = ({ component, path, ...rest }) => {
    if (localStorage.getItem("usuario")) {

      const usuarioStorage = JSON.parse(localStorage.getItem("usuario"))
      if (usuarioStorage.uid === firebaseUser.uid) {
        return <Route component={component} path={path} {...rest} />
      } else {
        return <Redirect to="/login" {...rest} />
      }
    } else {
      return <Redirect to="/login" {...rest} />
    }
  }
  //user distinto a falso, osea true o tiene algo
  return firebaseUser !== false ? (
    <Router>
      <div className="container mt-3">
        <Navbar />

        <Switch>
          <RutaPrivada component={Pokemones} path="/" exact />
          <RutaPrivada component={Perfil} path="/perfil" exact />
          <Route component={Login} path="/login" exact />
        </Switch>
      </div>
    </Router>
  ) : (<div>Cargando...</div>)
}

export default App;



