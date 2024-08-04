import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "counter";

const initialState = { count: 0, step: 1 };

const counterSlice = createSlice({
  initialState,
  name: SLICE_NAME,
  reducers: {
    // method(state, action){}
    decrement(state) {
      const { count, step } = state;
      state.count = count - step;
    },
    increment(state) {
      const { count, step } = state;
      state.count = count + step;
    },
    setStep(state, { payload }) {
      state.step = payload;
    },
  },
});

const { reducer, actions } = counterSlice;

export const { decrement, increment, setStep } = actions; // actionCreators

export default reducer;
// decrement() => {type: "counter/decrement"}
// setStep(v) => {type: 'counter/setStep', payload:v}
