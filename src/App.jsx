import React from 'react'

function App() {
  const integrantes = [
    'Valentina Molina',
    'Juan Felipe Quintero',
    'Mauricio Zuluaga',
    'Cristian David Castaño',
    'Mateo Alzate',
    'Willington'
  ]

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Encabezado */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          marginBottom: '50px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            background: '#312e81',
            color: '#c4b5fd',
            padding: '8px 18px',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          🚀 PROYECTO DEVOPS
        </div>

        <h1
          style={{
            fontSize: 'clamp(40px, 7vw, 70px)',
            margin: '0',
            fontWeight: '800',
            lineHeight: '1.1',
          }}
        >
          Laboratorio DevOps
        </h1>

        <h2
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            margin: '10px 0',
            background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AWS
        </h2>

        <p
          style={{
            color: '#94a3b8',
            fontSize: '18px',
            lineHeight: '1.6',
          }}
        >
          El mejor grupo, desplegado en la nube con AWS Amplify.
        </p>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#064e3b',
            color: '#6ee7b7',
            padding: '10px 18px',
            borderRadius: '30px',
            fontSize: '14px',
            marginTop: '10px',
          }}
        >
          <span>●</span>
          Aplicación desplegada correctamente
        </div>
      </div>

      {/* Contenido */}
      <div
        style={{
          width: '100%',
          maxWidth: '950px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px',
        }}
      >
        {/* Integrantes */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid #334155',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            👥 Integrantes
          </h2>

          <p style={{ color: '#64748b', marginBottom: '25px' }}>
            Equipo de trabajo
          </p>

          {integrantes.map((nombre, index) => (
            <div
              key={nombre}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                background: '#1e293b',
                padding: '14px 16px',
                borderRadius: '12px',
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  color: '#60a5fa',
                  fontWeight: 'bold',
                  fontSize: '13px',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <span style={{ color: '#e2e8f0' }}>
                {nombre}
              </span>
            </div>
          ))}
        </div>

        {/* Información del proyecto */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid #334155',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: '40px', marginBottom: '15px' }}>
            ☁️
          </div>

          <h2 style={{ margin: '0 0 15px' }}>
            Laboratorio DevOps
          </h2>

          <p
            style={{
              color: '#94a3b8',
              lineHeight: '1.7',
              margin: 0,
            }}
          >
            Proyecto desarrollado como parte del curso de
            Laboratorio DevOps, utilizando tecnologías modernas
            para el desarrollo y despliegue de aplicaciones en
            la nube.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '25px',
            }}
          >
            {['React', 'AWS', 'Amplify', 'DevOps'].map((tech) => (
              <span
                key={tech}
                style={{
                  background: '#312e81',
                  color: '#c4b5fd',
                  padding: '7px 12px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: '60px',
          paddingTop: '25px',
          borderTop: '1px solid #334155',
          width: '100%',
          maxWidth: '950px',
          textAlign: 'center',
          color: '#64748b',
          fontSize: '13px',
        }}
      >
        Laboratorio DevOps · AWS Amplify · 2026
      </footer>
    </div>
  )
}

export default App