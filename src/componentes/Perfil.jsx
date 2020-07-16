import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { } from "../redux/usuarioDUCKS"

import { auth, db } from "../firebase"

const Perfil = () => {

  const usuario = useSelector(store => store.usuario.user)

  const [nombreUsuario, setNombreUsuario] = useState(usuario.displayName)
  const [activarFormulario, setActivarFormulario] = useState(false)

  const actualizarUsuario = () => {

  }

  return (
    <div className="mt-5 text-center">
      <div className="card">
        <div className="card-body">
          <img src={usuario.photoURL} alt="img-perfil" width="100px" className="img-fluid" />
          <h5 className="card-title">Nombre: {usuario.displayName}</h5>
          <p className="card-text">Email: {usuario.email}</p>
          <button
            className="btn btn-dark"
            onClick={() => setActivarFormulario(true)}>
            Editar nombre
          </button>
          {
            activarFormulario ? (
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-md-5">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control" placeholder="Recipient's username"
                        value={nombreUsuario}
                        onChange={(e) => setNombreUsuario(e.target.value)} />
                      <div class="input-group-append">
                        <button
                          className="btn btn-dark" type="button"
                          onClick={() => actualizarUsuario()}>Actualizar
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}

export default Perfil
