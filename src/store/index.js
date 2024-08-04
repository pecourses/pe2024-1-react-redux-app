import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

// {
//   counter: { count: 0, step: 1 },
// }

// reducer - чиста функція (state, action) => state
// action - js-object з обов'язковою властивістю
//          type {type: "", payload: }

// const initialState = {
//     count: 0,
//     step: 1,
//   };
//   function reducer(state = initialState, action) {
//     const { type } = action;
//     const { count, step } = state;
//     switch (type) {
//       case "decrement":
//         return { ...state, count: count - step };
//       case "increment":
//         return { ...state, count: count + step };
//       case "setStep":
//         const { payload } = action;
//         return { ...state, step: payload };
//       default:
//         return state;
//     }
//   }

// сховище = стан + як змінювати стан (редюсер)
//   const store = legacy_createStore(reducer);
