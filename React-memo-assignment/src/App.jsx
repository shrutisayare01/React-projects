import './App.css'
import React from 'react';
import { useState,Suspense } from 'react';

const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

function App() {

  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo & Lazy Loading Demo</h2>

      <p>Counter: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <hr />

      {/* Lazy-loaded component */}
      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App
