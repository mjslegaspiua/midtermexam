import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('10 Things That Require Zero Talent');

  const handleKeyClick = (key) => {
    switch (key) {
      case '1': setDisplay('Being On Time'); break;
      case '2': setDisplay('Making An Effort'); break;
      case '3': setDisplay('Being High Energy'); break;
      case '4': setDisplay('Having A Positive Attitude'); break;
      case '5': setDisplay('Being Passionate'); break;
      case '6': setDisplay('Using Good Body Language'); break;
      case '7': setDisplay('Being Coachable'); break;
      case '8': setDisplay('Doing A Little Extra'); break;
      case '9': setDisplay('Being Prepared'); break;
      case '0': setDisplay('Having A Strong Work Ethic'); break;
      case 'NAME': setDisplay('MIGUEL JERVINZ LEGASPI'); break;
      case 'SUBJ': setDisplay('C-PCIT9'); break;
      default: break;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
        handleKeyClick(e.key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Ordered exactly like a calculator to match your layout image
  const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 'NAME', '0', 'SUBJ'];

  return (
    <div className="app-container">
      <h2 className="header">MIGUEL JERVINZ LEGASPI - IT3A</h2> 
      
      <div className="display-area">
        {display}
      </div>

      <div className="keypad">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleKeyClick(btn)}
            className="btn"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;