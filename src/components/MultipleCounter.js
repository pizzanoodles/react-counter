import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";

const Counter = () => {
  const [counterList, setCounterList] = useState([]);

  const onSizeChange = (inputSize) => {
    setCounterList(new Array(inputSize).fill(0))
  };

  return (
    <div>
      <CounterSizeGenerator onSizeChange={onSizeChange} />
      <CounterGroup counterList={counterList} />
    </div>
  );
};

export default Counter;
