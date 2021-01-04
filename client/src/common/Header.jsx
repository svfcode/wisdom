import React from 'react'

export default () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
        <a href="/" className="navbar-brand">KlimovCode</a>
        <div className="collapse navbar-collapse d-flex justify-content-between">
          <span className="text-light">Видение всегда предшествует осуществлению</span>
          <a class="btn btn-primary" href="#contacts" role="button">Связаться</a>
        </div>
      </nav>
    </header>
  )
}