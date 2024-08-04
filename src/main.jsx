import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";

// reducer - чиста функція (state, action) => state
// action - js-object з обов'язковою властивістю
//          type {type: "", payload: }

const initialState = {
  count: 0,
  step: 1,
};
function reducer(state = initialState, action) {
  const { type } = action;
  const { count, step } = state;
  switch (type) {
    case "decrement":
      return { ...state, count: count - step };
    case "increment":
      return { ...state, count: count + step };
    case "setStep":
      const { payload } = action;
      return { ...state, step: payload };
    default:
      return state;
  }
}

// сховище = стан + як змінювати стан (редюсер)
const store = legacy_createStore(reducer);

// Provider дає можливий доступ до стори з компонентів
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
