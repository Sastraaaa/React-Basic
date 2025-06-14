import { useCounter } from "../hooks/Counter";

function Counter() {
  const { count, handleIncrement, handleDecrement, handleReset } = useCounter();
  return (
    <div className="counter">
      <button onClick={handleDecrement}>Kurang</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
