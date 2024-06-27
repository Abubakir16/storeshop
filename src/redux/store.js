// store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "./localStorageMiddleware";

// Reducers
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return [...state, action.payload];
    case "REMOVE_FROM_FAVORITES":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
});

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(saveToLocalStorage)
);

export default store;
