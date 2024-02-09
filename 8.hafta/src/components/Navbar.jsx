import { Link, NavLink } from 'react-router-dom'

function Navbar({user, handleLogOut}) {
  return (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom d-flex">
  <div className="container">

    <Link className="navbar-brand fw-bolder text-primary" to="/"> LOREM.</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
        <NavLink className="nav-link" to="/">Anasayfa</NavLink>
        <NavLink className="nav-link" to="/products">Kategoriler</NavLink>
        <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
        <NavLink className="nav-link me-2" to="/contact">İletişim</NavLink>
              </ul>

              <div className="d-flex align-self-center input-group py-2 pe-3">
  <input type="text" className="form-control" placeholder="Arama Yap" aria-label="Ara" aria-describedby="button-addon2"/>
  <button className="btn btn-secondary" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <NavLink className="nav-link p-2 text-nowrap fw-semibold" to="/fav"><i className="fa-solid fa-cart-shopping text-primary"></i> Sepetim</NavLink>
      {
        user?
        <>
        
        <NavLink className="nav-link p-2 me-2 text-nowrap fw-semibold" to="/fav"><i className="fa-solid fa-heart text-danger"></i> Favoriler</NavLink>       
        <button className='my-3 btn btn-outline-secondary text-nowrap' onClick={handleLogOut}> <i className="fa-solid fa-circle-user mx-2"></i>Çıkış Yap ({user.name}) </button>
        </>:
        <NavLink className="nav-link" to="/login"><button className="btn btn-outline-secondary" type="button" id="button-addon2">Giriş</button></NavLink>
      }
    </div>
    
  </div>

</nav>
<nav className="navbar navbar-expand-md shadow " id='submenu'>
  <div className="container">
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mx-auto fw-semibold">
        <NavLink className="nav-link mx-2 text-light" to="/products/category/electronics">Electronics</NavLink>
        <NavLink className="nav-link mx-2 text-light" to="/products/category/jewelery">Jewelery</NavLink>
        <NavLink className="nav-link mx-2 text-light" to="/products/category/men's clothing">Men's Clothing</NavLink>
        <NavLink className="nav-link mx-2 text-light" to="/products/category/women's clothing">Women's Clothing</NavLink>
              </ul>
              </div>
              </div>
              </nav>
</>
  )
}

export default Navbar