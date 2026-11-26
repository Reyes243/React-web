function Bienvenida({ usuario, onCerrarSesion, onIrARegistro }) {
  const nombre = usuario?.nombre || 'Invitado'
  const correo = usuario?.correo || 'Sin sesión iniciada'
  const inicial = nombre.charAt(0).toUpperCase()

  return (
    <div className="screen-card">
      <div className="welcome-badge">{inicial}</div>
      <h1 className="screen-title">¡Bienvenido, {nombre}!</h1>
      <p className="screen-subtitle">
        Has ingresado correctamente a la aplicación.
      </p>

      <div className="info-box">
        <div className="info-row">
          <span className="info-label">Usuario</span>
          <span className="info-value">{nombre}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Correo</span>
          <span className="info-value">{correo}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Estado</span>
          <span className="info-value">
            {usuario ? 'Sesión activa' : 'Modo vista previa'}
          </span>
        </div>
      </div>

      <button
        className="primary-button"
        type="button"
        onClick={onCerrarSesion}
      >
        {usuario ? 'Cerrar sesión' : 'Ir a Iniciar sesión'}
      </button>

      <button
        className="secondary-button"
        type="button"
        onClick={onIrARegistro}
      >
        Crear otra cuenta
      </button>
    </div>
  )
}

export default Bienvenida
