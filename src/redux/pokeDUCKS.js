import axios from "axios"

//initial state 
const dataInicial = {
  count: 9,
  next: null,
  previous: null,
  results: []
}

//types
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO"

//REDUCER -
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, ...action.payload }
    case SIGUIENTE_POKEMONES_EXITO:
      return { ...state, ...action.payload }
    default:
      return state
  }

}

//ACTIONS - fetching data from the api
//first AF - get and set the parameters to the function obtenerPokemonesAccion
//async - because it is a call to an API
//dispatch - the reducer is activated
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {


  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
    console.log(res.data)
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

//action
export const siguientePokemonAccion = () => async (dispatch, getState) => {
  const { next } = getState().pokemones
  try {
    const res = await axios.get(next)
    dispatch({
      type: "SIGUIENTE_POKEMONES_EXITO",
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const anteriorPokemonAccion = () => async (dispatch, getState) => {
  const { previous } = getState().pokemones
  try {
    const res = await axios.get(previous)
    dispatch({
      type: "SIGUIENTE_POKEMONES_EXITO",
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}