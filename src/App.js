import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor.randomColor());

  return (
    <div>
      <h1 style={{ color: color, textAlign: 'center', fontSize: '3rem' }}>
        React Random Color Generator
      </h1>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button
            className="btn"
            onClick={() => setColor(randomColor.randomColor())}
          >
            Generate
          </button>
          <br />
          <br />
          <div style={{ marginTop: '30px', fontSize: '20px' }}>
            Generated Color : <button className="col">{color}</button> Here we
            have color
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
