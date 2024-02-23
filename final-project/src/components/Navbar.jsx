import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>

<nav className="navbar navbar-expand-lg bg-primary">
  <div className="container">
    <Link className="navbar-brand" to="/">
        <img src="https://www.bursa.bel.tr/assets/images/logo_beyaz1.png" style={{height:35}} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav ">
      <NavLink className="nav-link fw-medium text-white" to="/">Anasayfa</NavLink>


            <li className="nav-item dropdown  fw-medium text-white">
          <a className="nav-link dropdown-toggle  text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bursa Hakkinda
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <NavLink className="nav-link fw-medium text-white" to="/plajlar">Plajlar</NavLink>

        <li className="nav-item">
          <a className="nav-link  text-white" href="#">Iletisim</a>
        </li>
        
      </ul>
    </div>

  </div>
</nav>

    </>
  )
}

export default Navbar