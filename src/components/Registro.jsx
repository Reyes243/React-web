import { useState } from 'react'

function Registro({ onRegistroExitoso, onIrALogin }) {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [confirmarPassword, setConfirmarPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nombre.trim() || !correo.trim() || !password || !confirmarPassword) {
      setError('Por favor, completa todos los campos.')
      return
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    if (password !== confirmarPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    setError('')
    onRegistroExitoso({
      nombre: nombre.trim(),
      correo: correo.trim(),
      password,
    })
  }

  return (
    <div className="screen-card">
      <h1 className="screen-title">Crear cuenta</h1>
      <p className="screen-subtitle">Registra tus datos para comenzar</p>

      {error && <div className="alert-error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="reg-nombre">
            Nombre completo
          </label>
          <input
            id="reg-nombre"
            className="form-input"
            type="text"
            placeholder="Ej. Ana López"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="reg-correo">
            Correo electrónico
          </label>
          <input
            id="reg-correo"
            className="form-input"
            type="email"
            placeholder="ejemplo@correo.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="reg-password">
            Contraseña
          </label>
          <input
            id="reg-password"
            className="form-input"
            type="password"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="reg-confirmar">
            Confirmar contraseña
          </label>
          <input
            id="reg-confirmar"
            className="form-input"
            type="password"
            placeholder="Repite tu contraseña"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
          />
        </div>

        <button className="primary-button" type="submit">
          Registrarse
        </button>
      </form>

      <div className="link-row">
        <span>¿Ya tienes cuenta?</span>
        <button className="link-button" type="button" onClick={onIrALogin}>
          Inicia sesión
        </button>
      </div>
    </div>
  )
}

export default Registro
