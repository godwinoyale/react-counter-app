import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState()

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
  return (
    <>
    <div className="container">
        <h1>Count: {count}</h1>
        <button onClick={increment} className="plus">+</button>
        <button onClick={decrement} className="minus">-</button>
    </div>
    </>
  )
}

export default Counter