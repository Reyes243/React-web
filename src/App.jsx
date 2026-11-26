import { useState } from 'react'
import Registro from './components/Registro'
import Login from './components/Login'
import Bienvenida from './components/Bienvenida'
import './App.css'

function App() {
  const [pantallaActual, setPantallaActual] = useState('login')
  const [usuarioRegistrado, setUsuarioRegistrado] = useState(null)
  const [usuarioActivo, setUsuarioActivo] = useState(null)

  const handleRegistroExitoso = (nuevoUsuario) => {
    setUsuarioRegistrado(nuevoUsuario)
    setUsuarioActivo({
      nombre: nuevoUsuario.nombre,
      correo: nuevoUsuario.correo,
    })
    setPantallaActual('bienvenida')
  }

  const handleLoginExitoso = (usuario) => {
    setUsuarioActivo(usuario)
    setPantallaActual('bienvenida')
  }

  const handleCerrarSesion = () => {
    setUsuarioActivo(null)
    setPantallaActual('login')
  }

  return (
    <div className="app-container">
      <nav className="nav-bar" aria-label="Navegación entre pantallas">
        <button
          type="button"
          className={`nav-button ${pantallaActual === 'login' ? 'active' : ''}`}
          onClick={() => setPantallaActual('login')}
        >
          Login
        </button>
        <button
          type="button"
          className={`nav-button ${pantallaActual === 'registro' ? 'active' : ''}`}
          onClick={() => setPantallaActual('registro')}
        >
          Registro
        </button>
        <button
          type="button"
          className={`nav-button ${pantallaActual === 'bienvenida' ? 'active' : ''}`}
          onClick={() => setPantallaActual('bienvenida')}
        >
          Bienvenida
        </button>
      </nav>

      {pantallaActual === 'registro' && (
        <Registro
          onRegistroExitoso={handleRegistroExitoso}
          onIrALogin={() => setPantallaActual('login')}
        />
      )}

      {pantallaActual === 'login' && (
        <Login
          onLoginExitoso={handleLoginExitoso}
          onIrARegistro={() => setPantallaActual('registro')}
          usuarioRegistrado={usuarioRegistrado}
        />
      )}

      {pantallaActual === 'bienvenida' && (
        <Bienvenida
          usuario={usuarioActivo}
          onCerrarSesion={handleCerrarSesion}
          onIrARegistro={() => setPantallaActual('registro')}
        />
      )}
    </div>
  )
}

export default App
