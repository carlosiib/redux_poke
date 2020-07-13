import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { unPokeDetalleAccion } from "../redux/pokeDUCKS"

const Detalle = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = () => {
      dispatch(unPokeDetalleAccion())
    }
    fetchData()
  }, [dispatch])

  const pokemon = useSelector(store => store.pokemones.unPokemon)
  console.log(pokemon)

  return pokemon ? (
    <div className="card mt-4 text-center">
      <div className="card-body">
        <img src={pokemon.foto} className="img-fluid" />
        <div className="card-title text-uppercase">{pokemon.nombre}</div>
        <p className="card-title">Alto: {pokemon.ancho} | Ancho: {pokemon.alto} </p>
      </div>
    </div>
  ) : null
}

export default Detalle
