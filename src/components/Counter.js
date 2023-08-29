import { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
        // handleCountChange(index, 1);
    };

    const onDecrease = () => {
        setNumber(number - 1);
    };

    return (
        <div>
            <button onClick={onIncrease}>+</button>
            <span>{number}</span>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};

export default Counter;
