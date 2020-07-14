import React, { useEffect } from 'react'

// useDipatch -> Consumir,disparar la accion
// useSelector -> leer el store
import { useDispatch, useSelector } from "react-redux"
import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion, unPokeDetalleAccion } from "../redux/pokeDUCKS"
import Detalle from "./Detalle"

const Pokemones = () => {

  const dispatch = useDispatch()
  const pokemones = useSelector(store => store.pokemones.results)
  const next = useSelector(store => store.pokemones.next)
  const previous = useSelector(store => store.pokemones.previous)


  useEffect(() => {
    const fetchData = () => {
      dispatch(obtenerPokemonesAccion())
    }
    fetchData()
  }, [dispatch])

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Lista de Pokemones</h3>
        <br />

        <div className="d-flex justify-content-between">
          {
            pokemones.length === 0 && (<button
              className="btn btn-dark" onClick={() => dispatch(obtenerPokemonesAccion())}>
              Get Pokemones
            </button>)
          }

          {
            next && (
              <button className="btn btn-dark" onClick={() => dispatch(siguientePokemonAccion())}>Siguiente</button>
            )
          }

          {
            previous && (
              <button className="btn btn-dark" onClick={() => dispatch(anteriorPokemonAccion())}>Anterior</button>
            )
          }
        </div>

        <ul className="list-group mt-3">
          {
            pokemones.map(item => (
              <li
                key={item.name}
                className="list-group-item text-uppercase">{item.name}
                <button
                  className="btn btn-dark btn-sm float-right"
                  onClick={() => dispatch(unPokeDetalleAccion(item.url))}>Info</button>
              </li>
            ))
          }
        </ul>
      </div >
      <div className="col-md-6">
        <h3>Detalle del pokemon</h3>
        <Detalle />
      </div>
    </div >
  )
}
export default Pokemones;