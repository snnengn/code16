import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Product({user}) {

    const {productId}=useParams()
    const[product, setProduct]= useState({})

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((json) => setProduct(json))
        .catch(err=>console.log(err))
    },[productId])

  return (
    <>
    <h3 className="my-4 border rounded bg-light py-2 text-center">{product.title}</h3>
    <div className="row">
    <div className="col col-sm-6 mb-5">
      <img src={product.image} className="w-100 img-thumbnail p-3" alt={product.title} />
    
    </div>
    <div className="col col-sm-6">
      <p>{product.description}</p>
      <h4 className="my-4">{product.price} TL</h4>
      <div className="d-flex justify-content-between mb-3 ">      
      
      <a href="#" className="btn btn-primary w-100">Sepete Ekle</a>
      <span className="fw-bolder fs-4 text-end ms-3"><i className="fa-solid fa-heart text-danger"></i></span>
      </div>
    </div>
    </div>
    </>

  )
}

export default Product