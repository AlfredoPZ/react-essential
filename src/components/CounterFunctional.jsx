import React from 'react'

export const CounterFunctional = ({title, initialCounter}) => {

    const [count, setCount] = React.useState(initialCounter);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    }

    return (
        <>
            <h1>{title}</h1>
            <p>{count}</p>
            <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
        </>
    )
}
