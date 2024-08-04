import { connect } from "react-redux";

function Counter({ count, step, dispatch }) {
  const dec = () => {
    const action = { type: "decrement" };
    dispatch(action); // ніби виклик reducer
  };

  const inc = () => {
    const action = { type: "increment" };
    dispatch(action);
  };

  const setStep = ({ target: { value } }) => {
    const action = { type: "setStep", payload: Number(value) };
    dispatch(action);
  };

  return (
    <div>
      <button onClick={dec}>-</button>
      {count}
      <button onClick={inc}>+</button>
      <div>
        <input type="number" value={step} onChange={setStep} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
} // { count: 0, step: 1} => Counter ({count, state})

// створює HOC, який прокине dispatch в пропси
// перший параметр приймає функцію, щоб проникути в пропси стан
const withAccessToStore = connect(mapStateToProps); // HOC

export default withAccessToStore(Counter);

// HOC - function(Component)=>Component
