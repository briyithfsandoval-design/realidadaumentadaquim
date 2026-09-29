import React, { useState } from 'react';
import PeriodicTable from './components/PeriodicTable';
import SimuladorPH from './components/SimuladorPH';
import EstadosYMezclas from './components/EstadosYMezclas';
import AtomosYEnlaces from './components/AtomosYEnlaces';

function App() {
  // Estado para controlar qué módulo se muestra en pantalla
  const [moduloActivo, setModuloActivo] = useState('tabla'); 

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
      minHeight: '100vh', 
      background: '#f8fafc', 
      padding: '20px' 
    }}>
      
      {/* ENCABEZADO */}
      <header style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ color: '#0284c7', margin: '0 0 8px 0' }}>Proyecto de Química Escolar</h1>
        <p style={{ color: '#64748b', margin: 0, fontSize: '14px' }}>
          Pulsa un botón para abrir el módulo correspondiente
        </p>
      </header>

      {/* BOTONES PRINCIPALES */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '32px',
        flexWrap: 'wrap'
      }}>
        {/* BOTÓN 1: TABLA PERIÓDICA */}
        <button
          onClick={() => setModuloActivo('tabla')}
          style={{
            padding: '12px 20px',
            borderRadius: '12px',
            border: '2px solid #0284c7',
            background: moduloActivo === 'tabla' ? '#0284c7' : '#ffffff',
            color: moduloActivo === 'tabla' ? '#ffffff' : '#0284c7',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(2, 132, 199, 0.1)',
            transition: 'all 0.2s ease'
          }}
        >
          ⚛️ Tabla Periódica
        </button>

        {/* BOTÓN 2: INDICADOR DE PH */}
        <button
          onClick={() => setModuloActivo('ph')}
          style={{
            padding: '12px 20px',
            borderRadius: '12px',
            border: '2px solid #0d9488',
            background: moduloActivo === 'ph' ? '#0d9488' : '#ffffff',
            color: moduloActivo === 'ph' ? '#ffffff' : '#0d9488',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(13, 148, 136, 0.1)',
            transition: 'all 0.2s ease'
          }}
        >
          🧪 Indicador de pH
        </button>

        {/* BOTÓN 3: ESTADOS Y MEZCLAS */}
        <button
          onClick={() => setModuloActivo('materia')}
          style={{
            padding: '12px 20px',
            borderRadius: '12px',
            border: '2px solid #a21caf',
            background: moduloActivo === 'materia' ? '#a21caf' : '#ffffff',
            color: moduloActivo === 'materia' ? '#ffffff' : '#a21caf',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(162, 28, 175, 0.1)',
            transition: 'all 0.2s ease'
          }}
        >
          🧊 Estados y Mezclas
        </button>

        {/* BOTÓN 4: ÁTOMOS Y ENLACES */}
        <button
          onClick={() => setModuloActivo('enlaces')}
          style={{
            padding: '12px 20px',
            borderRadius: '12px',
            border: '2px solid #7e22ce',
            background: moduloActivo === 'enlaces' ? '#7e22ce' : '#ffffff',
            color: moduloActivo === 'enlaces' ? '#ffffff' : '#7e22ce',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(126, 34, 206, 0.1)',
            transition: 'all 0.2s ease'
          }}
        >
          🔬 Átomos y Enlaces
        </button>
      </div>

      {/* VISTA DEL COMPONENTE SELECCIONADO */}
      <main style={{ 
        background: '#ffffff', 
        padding: '24px', 
        borderRadius: '16px', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {moduloActivo === 'tabla' && (
          <section>
            <h2 style={{ color: '#0369a1', marginTop: 0, marginBottom: '20px', borderBottom: '2px solid #e0f2fe', paddingBottom: '8px' }}>
              ⚛️ Tabla Periódica Interactiva
            </h2>
            <PeriodicTable />
          </section>
        )}

        {moduloActivo === 'ph' && (
          <section>
            <h2 style={{ color: '#0d9488', marginTop: 0, marginBottom: '20px', borderBottom: '2px solid #ccfbf1', paddingBottom: '8px' }}>
              🧪 Simulador e Indicador de pH
            </h2>
            <SimuladorPH />
          </section>
        )}

        {moduloActivo === 'materia' && (
          <section>
            <h2 style={{ color: '#a21caf', marginTop: 0, marginBottom: '20px', borderBottom: '2px solid #f5d0fe', paddingBottom: '8px' }}>
              🧊 Estados de la Materia y Clasificación de Mezclas
            </h2>
            <EstadosYMezclas />
          </section>
        )}

        {moduloActivo === 'enlaces' && (
          <section>
            <h2 style={{ color: '#7e22ce', marginTop: 0, marginBottom: '20px', borderBottom: '2px solid #e9d5ff', paddingBottom: '8px' }}>
              🔬 Estructura Atómica y Enlaces Químicos
            </h2>
            <AtomosYEnlaces />
          </section>
        )}
      </main>

      {/* PIE DE PÁGINA */}
      <footer style={{ textAlign: 'center', marginTop: '40px', color: '#94a3b8', fontSize: '12px' }}>
        Proyecto de Química - Fernanda
      </footer>

    </div>
  );
}

export default App;