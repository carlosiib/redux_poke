import React from 'react'

// useDipatch -> Consumir,disparar la accion
// useSelector -> leer el store
import { useDispatch, useSelector } from "react-redux"
import { obtenerPokemonesAccion, siguientePokemonAccion } from "../redux/pokeDUCKS"

const Pokemones = () => {
  const dispatch = useDispatch()
  const pokemones = useSelector(store => store.pokemones.array)
  console.log(pokemones)
  return (
    <div>
      lista de pokemones
      <button
        onClick={() => dispatch(obtenerPokemonesAccion())}>
        Get Pokemones
      </button>
      <button onClick={() => dispatch(siguientePokemonAccion())}>Siguiente</button>
      <ul>
        {
          pokemones.map(item => (
            <li key={item.name}>{item.name}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default Pokemones;