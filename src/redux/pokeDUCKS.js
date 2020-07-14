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
const POKE_INFO_EXITO = "POKE_INFO_EXITO"

//reducers
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, ...action.payload }
    case SIGUIENTE_POKEMONES_EXITO:
      return { ...state, ...action.payload }
    case POKE_INFO_EXITO:
      return { ...state, unPokemon: action.payload }
    default:
      return state
  }

}

//ACTIONS - fetching data from the api
//first AF - get and set the parameters to the function obtenerPokemonesAccion
//async - because it is a call to an API
//dispatch - the reducer is activated
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

  //validating if localstorage have items
  if (localStorage.getItem("offset=0")) {
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      //detrasnform the JSON 
      payload: JSON.parse(localStorage.getItem("offset=0"))
    })
    return
  }
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)
    console.log(res.data)
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data
    })

    //saving pokemons in localstorage
    localStorage.setItem("offset=0", JSON.stringify(res.data))

  } catch (error) {
    console.log(error)
  }
}

//action
export const siguientePokemonAccion = () => async (dispatch, getState) => {
  const { next } = getState().pokemones

  if (localStorage.getItem(next)) {
    console.log("datos desde localstorage")
    dispatch({
      type: "OBTENER_POKEMONES_EXITO",
      payload: JSON.parse(localStorage.getItem(next))
    })
    return
  }

  try {
    console.log("datos desde API")
    const res = await axios.get(next)
    dispatch({
      type: "SIGUIENTE_POKEMONES_EXITO",
      payload: res.data
    })

    localStorage.setItem(next, JSON.stringify(res.data))

  } catch (error) {
    console.log(error)
  }
}

export const anteriorPokemonAccion = () => async (dispatch, getState) => {
  const { previous } = getState().pokemones

  if (localStorage.getItem(previous)) {
    console.log("datos desde localstorage")
    dispatch({
      type: "OBTENER_POKEMONES_EXITO",
      payload: JSON.parse(localStorage.getItem(previous))
    })
    return
  }

  try {
    const res = await axios.get(previous)
    dispatch({
      type: "SIGUIENTE_POKEMONES_EXITO",
      payload: res.data
    })
    localStorage.setItem(previous, JSON.stringify(res.data))
  } catch (error) {
    console.log(error)
  }
}

export const unPokeDetalleAccion = (url = "https://pokeapi.co/api/v2/pokemon/1/") => async (dispatch, getState) => {

  if (localStorage.getItem(url)) {
    dispatch({
      type: "POKE_INFO_EXITO",
      payload: JSON.parse(localStorage.getItem(url))
    })
    console.log("datos desde localstorage")
    return
  }

  try {
    console.log("datos desde API")
    const res = await axios.get(url)
    //console.log(res.data)
    dispatch({
      type: "POKE_INFO_EXITO",
      //getting the info for Detalle component
      payload: {
        name: res.data.name,
        ancho: res.data.weight,
        alto: res.data.height,
        foto: res.data.sprites.front_default
      }
    })
    localStorage.setItem(url, JSON.stringify({
      name: res.data.name,
      ancho: res.data.weight,
      alto: res.data.height,
      foto: res.data.sprites.front_default
    }))
  } catch (error) {
    console.log(error)
  }
}