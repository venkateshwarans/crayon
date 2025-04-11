import { useState } from 'react'
import { ChartTest } from './components/ChartTest'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center' }}>React Test App</h1>
        <p style={{ textAlign: 'center', color: '#4b5563', marginTop: '0.5rem' }}>Testing the console.log in AreaChart</p>
      </header>
      
      <main style={{ maxWidth: '56rem', margin: '0 auto', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', padding: '1.5rem' }}>
        <ChartTest  />
        
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Counter Example</h2>
          <p style={{ marginBottom: '1rem' }}>Count: {count}</p>
          <button 
            onClick={() => setCount(count + 1)}
            style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}
          >
            Increment
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
