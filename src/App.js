import React, { useState } from 'react';
import Todos from './components/Todos';

function App() {
  const [count, setCount] = useState( 0 );
  return (
    <div className="App">
        <h1>App</h1>
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(count + 1)}>Click me</button>
        <Todos />
    </div>
  );
}

export default App;
