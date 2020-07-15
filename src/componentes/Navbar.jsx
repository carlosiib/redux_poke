import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cerrarSesionAction } from "../redux/usuarioDUCKS"

import { Link, NavLink } from "react-router-dom"
import { withRouter } from "react-router-dom"

const Navbar = (props) => {

  const activo = useSelector(store => store.usuario.activo)

  const dispatch = useDispatch()
  const cerrarSesion = () => {
    dispatch(cerrarSesionAction())
    props.history.push("/login")
  }

  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">App poke</Link>
      <div className="d-flex">
        {
          activo ? (
            <>
              <NavLink
                className="btn btn-dark mr-2"
                to="/"
                exact>
                Inicio
              </NavLink>
              <button
                className="btn btn-dark mr-2"
                onClick={() => cerrarSesion()}>
                Cerrar sesión
              </button>
            </>
          ) : (
              <NavLink
                className="btn btn-dark mr-2"
                to="/login" >
                Login</NavLink>
            )
        }
      </div>
    </div>
  )
}

export default withRouter(Navbar)