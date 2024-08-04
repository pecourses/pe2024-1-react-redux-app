import { connect } from "react-redux";
import {
  decrement,
  increment,
  setStep,
} from "./../../store/slices/counterSlice";

function Counter({ count, step, dispatch }) {
  const dec = () => {
    const action = decrement();
    dispatch(action); // ніби виклик reducer
  };

  const inc = () => {
    const action = increment();
    dispatch(action);
  };

  const changeStep = ({ target: { value } }) => {
    const action = setStep(Number(value));
    dispatch(action);
  };

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

// створює HOC, який прокине dispatch в пропси
// перший параметр приймає функцію, щоб проникути в пропси стан
const withAccessToStore = connect(mapStateToProps); // HOC

export default withAccessToStore(Counter);

// HOC - function(Component)=>Component
