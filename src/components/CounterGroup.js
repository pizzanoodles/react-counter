import Counter from "./Counter";

const CounterGroup = (props) => {
    return props.counterList.map((_, index) => {
        return <Counter key={index} />;
    });
};

export default CounterGroup;
