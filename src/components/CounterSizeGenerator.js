const CounterSizeGenerator = (props) => {
    const onInputChange = (event) => {
        const inputSize = parseInt(event.target.value);

        props.onSizeChange(inputSize);
    };

    return (
        <div>
            <input
                type="number"
                min={0}
                value={props.size}
                onChange={onInputChange}
            />
        </div>
    );
};

export default CounterSizeGenerator;
