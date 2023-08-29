import { useState } from "react";
import { useDispatch } from "react-redux";


const Counter = (props) => {
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();

    const onIncrease = () => {
        setNumber(number + 1);
        // handleCountChange(index, 1);
        props.increase();
        
    };

    const onDecrease = () => {
        setNumber(number - 1);
        props.decrease();
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
