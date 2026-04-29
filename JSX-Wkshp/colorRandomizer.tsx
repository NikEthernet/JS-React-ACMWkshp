import { useState } from 'react'

export default function App() {
  // TODO 1: Create a state variable called color
  //   - Start with 'rgb(0, 0, 0)' as the default color
  

  // TODO 2: Create a helper function getRandomNumber()
  //   - It should return a random number from 0–255
  //   Hint hint: Use Math.random()
  

  // TODO 3: Create a function called changeColor()
  //   - Generate r, g, b using getRandomNumber(), then modify color
  //   Hint hint: setColor(//to fill in);
  

  // TODO 4: Create a function called resetColor()
  //   - Set color back to 'rgb(0, 0, 0)'

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.label}>Color Randomizer</h1>

        {/* TODO 5: Apply the color state as the background */}
        <button style={{ ...styles.primary}}>
          Change My Color
        </button>

        <div style={styles.buttons}>
          {/* TODO 6: Add onClick={changeColor} */}
          <button style={styles.secondary}  >Random Color</button>

          {/* TODO 7: Add onClick={resetColor}  */}
          <button style={styles.secondary}  >Reset</button>
        </div>

       
      </div>
    </div>
  )
}

// ── Styles (no changes needed) ─────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#f5f0e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'monospace',
  },
  card: {
    background: '#fff',
    border: '2px solid #222',
    borderRadius: 4,
    padding: '3rem 4rem',
    textAlign: 'center',
    boxShadow: '6px 6px 0 #222',
  },
  label: {
    fontSize: '1rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#666',
    marginBottom: '1.5rem',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  primary: {
    fontFamily: 'monospace',
    fontSize: '1rem',
    padding: '1rem 2rem',
    border: '2px solid #222',
    borderRadius: 2,
    color: '#fff',
    cursor: 'pointer',
  },
  secondary: {
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    padding: '0.75rem 1.5rem',
    border: '2px solid #222',
    borderRadius: 2,
    background: '#fff',
    color: '#222',
    cursor: 'pointer',
  },
}

