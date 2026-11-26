import { useState } from 'react'

function Login({ onLoginExitoso, onIrARegistro, usuarioRegistrado }) {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!correo.trim() || !password) {
      setError('Ingresa tu correo electrónico y contraseña.')
      return
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    setError('')

    const nombreUsuario =
      usuarioRegistrado && usuarioRegistrado.correo === correo.trim()
        ? usuarioRegistrado.nombre
        : correo.trim().split('@')[0]

    onLoginExitoso({
      nombre: nombreUsuario,
      correo: correo.trim(),
    })
  }

  return (
    <div className="screen-card">
      <h1 className="screen-title">Iniciar sesión</h1>
      <p className="screen-subtitle">Ingresa con tu cuenta para continuar</p>

      {error && <div className="alert-error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="login-correo">
            Correo electrónico
          </label>
          <input
            id="login-correo"
            className="form-input"
            type="email"
            placeholder="ejemplo@correo.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="login-password">
            Contraseña
          </label>
          <input
            id="login-password"
            className="form-input"
            type="password"
            placeholder="Tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="primary-button" type="submit">
          Entrar
        </button>
      </form>

      <div className="link-row">
        <span>¿No tienes cuenta?</span>
        <button className="link-button" type="button" onClick={onIrARegistro}>
          Regístrate aquí
        </button>
      </div>
    </div>
  )
}

export default Login
