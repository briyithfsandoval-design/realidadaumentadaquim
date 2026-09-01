import React, { useState } from 'react';
import SimuladorPH from './components/SimuladorPH';
import PeriodicTable from './components/PeriodicTable';

function App() {
  const [seccion, setSeccion] = useState('ph');

  return (
    <div style={{ 
      fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif", 
      textAlign: 'center', 
      padding: '40px 20px', 
      backgroundColor: '#0f172a', 
      minHeight: '100vh',
      color: '#f8fafc'
    }}>
      <header style={{ marginBottom: '35px' }}>
        <h1 style={{ 
          color: '#f8fafc', 
          marginBottom: '20px', 
          fontSize: '2.2rem', 
          fontWeight: '800',
          letterSpacing: '-0.5px',
          textShadow: '0 0 20px rgba(56, 189, 248, 0.3)'
        }}>
          🧪 Química Interactiva
        </h1>
        
        <div style={{ 
          display: 'inline-flex', 
          backgroundColor: '#1e293b', 
          padding: '6px', 
          borderRadius: '12px', 
          gap: '6px',
          border: '1px solid #334155',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
        }}>
          <button 
            onClick={() => setSeccion('ph')}
            style={{ 
              padding: '10px 22px', 
              backgroundColor: seccion === 'ph' ? '#38bdf8' : 'transparent', 
              color: seccion === 'ph' ? '#0f172a' : '#94a3b8', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '0.9rem',
              boxShadow: seccion === 'ph' ? '0 0 12px rgba(56, 189, 248, 0.4)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            📊 Simulador de pH
          </button>

          <button 
            onClick={() => setSeccion('tabla')}
            style={{ 
              padding: '10px 22px', 
              backgroundColor: seccion === 'tabla' ? '#38bdf8' : 'transparent', 
              color: seccion === 'tabla' ? '#0f172a' : '#94a3b8', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '0.9rem',
              boxShadow: seccion === 'tabla' ? '0 0 12px rgba(56, 189, 248, 0.4)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            ⚛️ Tabla Periódica
          </button>
        </div>
      </header>

      <main>
        {seccion === 'ph' ? <SimuladorPH /> : <PeriodicTable />}
      </main>
    </div>
  );
}

export default App;