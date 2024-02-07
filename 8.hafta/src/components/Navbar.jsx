import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow d-flex justify-content-between">
  <div className="container">

    <Link className="navbar-brand fw-bolder text-success" to="/"> LOREM.</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink className="nav-link" to="/">Anasayfa</NavLink>
        <NavLink className="nav-link" to="/products">Ürünler</NavLink>
        <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
        <NavLink className="nav-link" to="/contact">İletişim</NavLink>
              </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar