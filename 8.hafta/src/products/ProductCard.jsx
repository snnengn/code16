import { Link } from "react-router-dom"

function ProductCard({item, user}) {
  const productUrl=`/products/product/${item.id}`
  return (
      <div className="col-sm mb-3">
    <div className="card">
          <h6 className="card-title text-center p-4">{item.title}</h6>
      <Link to={productUrl}>
  <img src={item.image} className="card-img-top p-5" alt={item.title} />
      </Link>
  <div className="card-body">    

    <p className="fw-bolder fs-5 text-center">{item.price} TL</p>
    <a href="#" className="btn btn-primary w-100">Sepete Ekle</a>
  </div>
</div>
</div>
  )
}

export default ProductCard