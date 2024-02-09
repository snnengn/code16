import { Link } from "react-router-dom"

function ProductCard({item, user}) {
  const productUrl=`/products/product/${item.id}`
  
  return (
      <div className="col-sm mb-3">
    <div className="card">
          <h6 className="card-title text-center pt-4">{item.title.substring(0,25) + "..."}</h6>
      <Link className="mx-auto" to={productUrl}>
  <img src={item.image} id="cardImage" className="card-img-top p-4" alt={item.title} />
      </Link>
  <div className="card-body">
  <div className="fw-bolder fs-5 text-center text-warning me-1 mb-2">
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>  
  </div>    
<p className="fw-bolder fs-4 text-center">{item.price} TL</p>
    <div className="d-flex justify-content-between mb-3 ">
      
      
      <a href="#" className="btn btn-primary w-100">Sepete Ekle</a>
      <span className="fw-bolder fs-4 text-end ms-3"><i className="fa-solid fa-heart text-danger"></i></span>
      </div>

    
  </div>
</div>
</div>
  )
}

export default ProductCard