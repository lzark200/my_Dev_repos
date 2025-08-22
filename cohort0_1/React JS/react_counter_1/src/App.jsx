// import { useState } from 'react'

// function App() {
  
//   const [count, setCount] = useState(0)

//   return (    
    
//       <div>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//   )
// }

// export default App

import { useState } from 'react';

function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Counter />
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


export default App;




