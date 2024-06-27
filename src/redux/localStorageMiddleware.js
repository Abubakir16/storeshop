// localStorageMiddleware.js
export const saveToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  if (
    [
      "ADD_TO_CART",
      "REMOVE_FROM_CART",
      "ADD_TO_FAVORITES",
      "REMOVE_FROM_FAVORITES",
    ].includes(action.type)
  ) {
    const state = store.getState();
    localStorage.setItem("reduxState", JSON.stringify(state));
  }
  return result;
};

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state from localStorage", e);
    return undefined;
  }
};
