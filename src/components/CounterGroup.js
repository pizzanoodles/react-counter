import Counter from "./Counter";

const CounterGroup = (props) => {
    // useDispatch
    const handleCountChange = (index, diff) => () => {
        // dispatch the action once the number inside any counter changes
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
