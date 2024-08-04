import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    themeData: themeReducer,
  },
});

export default store;

// {
//   counter: { count: 0, step: 1 },
//   themeData: { theme: LIGHT }
// }

// reducer - чиста функція (state, action) => state
// action - js-object з обов'язковою властивістю
//          type {type: "", payload: }

// сховище = стан + як змінювати стан (редюсер)
