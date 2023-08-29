import { useState } from "react";

const Counter = () => {
	
  const [number, setNumber] = useState(0);

  function add() {
    setNumber(number + 1);
  }

  function minus() {
    setNumber(number - 1);
  }

  return (
    <div>
      <button onClick={add}>+</button>
      <span>{number}</span>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default Counter;
