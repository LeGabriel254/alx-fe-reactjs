import React, {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);
  

  return (
    <div>
      <p>Current Count: {count}</p>
      <button value={count }onClick={() => setCount(count + 1)}>Increment</button>
      <button value={count} onClick={() => setCount(count - 1)}>Decrement</button>
      <button value={count} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;