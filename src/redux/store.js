import { createStore, combineReducers, compose, applyMiddleware } from "redux"
//poder hacer promesas con redux
import thunks from "redux-thunk"

import pokeReducer from "./pokeDUCKS.js"
import usuarioReducer from "./usuarioDUCKS"

const rootReducer = combineReducers({
  pokemones: pokeReducer,
  usuario: usuarioReducer
})

//configurar redux-devtools en chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunks)))
  return store
}