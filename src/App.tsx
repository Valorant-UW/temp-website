import { useState } from 'react';
import valorant from './assets/valorant.jpeg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a>
          <img src={valorant} className='logo' alt='Valorant logo' />
        </a>
      </div>
      <h1>Valorant @ UW</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Website is being built! Come back soon.</p>
      </div>
    </>
  );
}

export default App;
