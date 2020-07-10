import { createStore, combineReducers, compose, applyMiddleware } from "redux"
//poder hacer promesas con redux
import thunks from "redux-thunk"

import pokeReducer from "./pokeDUCKS.js"

const rootReducer = combineReducers({
  pokemones: pokeReducer
})

//configurar redux-devtools en chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunks)))
  return store
}