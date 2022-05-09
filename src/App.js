import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor.randomColor());

  // const color = randomColor();

  return (
    <div
      style={{
        height: '80vh',
        width: '80vw',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button onClick={() => setColor(randomColor.randomColor())}>
        Generate
      </button>
    </div>
  );
}
export default App;
