import { connect } from "react-redux";
import {
  decrement,
  increment,
  setStep,
} from "./../../store/slices/counterSlice";

function Counter({ count, step, dec, inc, updateStep }) {
  const changeStep = ({ target: { value } }) => updateStep(value);

  return (
    <div>
      <button onClick={dec}>-</button>
      {count}
      <button onClick={inc}>+</button>
      <div>
        <input type="number" value={step} onChange={changeStep} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state.counter;
} // { count: 0, step: 1} => Counter ({count, state})

function mapDispatchToProps(dispatch) {
  return {
    dec: () => dispatch(decrement()),
    inc: () => dispatch(increment()),
    updateStep: value => dispatch(setStep(Number(value))),
  };
}

// створює HOC, який прокине dispatch в пропси
// перший параметр приймає функцію, щоб проникути в пропси стан
const withAccessToStore = connect(mapStateToProps, mapDispatchToProps); // HOC

export default withAccessToStore(Counter);

// HOC - function(Component)=>Component
