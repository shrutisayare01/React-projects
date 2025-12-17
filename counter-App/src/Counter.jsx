import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Click here</button>
        </div>
    );
}
export default Counter;