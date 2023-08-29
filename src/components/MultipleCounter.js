import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";
import CounterSizeGenerator from "./CounterSizeGenerator";

const Counter = () => {
    const [counterList, setCounterList] = useState([]);
    const sum = counterList.reduce((prev, count) => prev + count, 0);

    const onSizeChange = (inputSize) => {
        setCounterList(new Array(inputSize).fill(0));
    };

    return (
        <div>
            <CounterSizeGenerator onSizeChange={onSizeChange} />
            <CounterGroupSum sum={sum} />
            <CounterGroup counterList={counterList} />
        </div>
    );
};

export default Counter;
