import axios from "axios"

//CONSTANTS - set the date to the state
const dataInicial = {
  array: []
}

//types
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"

//REDUCER - get the data fetched from the api, then it send it to the constants
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, array: action.payload }
    default:
      return state
  }

}

//ACTIONS - fetching dat from the api
//first AF - get and set the parameters to the funcion obtenerPokemonesAccion
//async - because it is a call to an API
//dispatch - the reducer is activated
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data.results
    })
  } catch (error) {
    console.log(error)
  }
} 