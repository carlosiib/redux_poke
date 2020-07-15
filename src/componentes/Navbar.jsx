import React from 'react'
import { useDispatch } from 'react-redux'
import { cerrarSesionAction } from "../redux/usuarioDUCKS"

import { Link, NavLink } from "react-router-dom"
import { withRouter } from "react-router-dom"

const Navbar = (props) => {

  const dispatch = useDispatch()
  const cerrarSesion = () => {
    dispatch(cerrarSesionAction())
    props.history.push("/login")
  }

  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">App poke</Link>
      <div className="d-flex">
        <NavLink
          className="btn btn-dark mr-2"
          to="/"
          exact>
          Inicio</NavLink>
        <NavLink
          className="btn btn-dark mr-2"
          to="/login" >
          Login</NavLink>
        <button
          className="btn btn-dark mr-2"
          onClick={() => cerrarSesion()}>
          Cerrar sesión
          </button>
      </div>
    </div>
  )
}

export default withRouter(Navbar)