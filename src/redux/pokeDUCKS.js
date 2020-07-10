import axios from "axios"

//CONSTANTS - set the data to the state
const dataInicial = {
  array: [],
  offset: 0
}

//types
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO"

//REDUCER - get the data fetched from the api, then it send it to the constants
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, array: action.payload }
    case SIGUIENTE_POKEMONES_EXITO:
      return { ...state, array: action.payload.array, offset: action.payload.offset }
    default:
      return state
  }

}

//ACTIONS - fetching data from the api
//first AF - get and set the parameters to the function obtenerPokemonesAccion
//async - because it is a call to an API
//dispatch - the reducer is activated
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

  const offset = getState().pokemones.offset
  //console.log(offset)
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data.results
    })
  } catch (error) {
    console.log(error)
  }
}


export const siguientePokemonAccion = () => async (dispatch, getState) => {

  const offset = getState().pokemones.offset
  const siguiente = offset + 20

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
    dispatch({
      type: "SIGUIENTE_POKEMONES_EXITO",
      payload: {
        array: res.data.results,
        offset: siguiente
      }
    })
  } catch (error) {
    console.log(error)
  }
}