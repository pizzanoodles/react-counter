import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { updateCount } from "./counterSlice";
import { useSelector } from "react-redux";


const CounterGroup = (props) => {
    const dispatch = useDispatch();
    const counterList = useSelector((state) => state.counter.counterList);
    const handleCountChange = (index, diff) => () => {
        let count = counterList[index] + diff;
        // dispatch the action once the number inside any counter changes
        dispatch(updateCount(index, count));
    };

    return props.counterList.map((count, index) => {
        return (
            <Counter
                key={index}
                count={count}
                increase={handleCountChange(index, 1)}
                decrease={handleCountChange(index, -1)}
            />
        );
    });
};

export default CounterGroup;
