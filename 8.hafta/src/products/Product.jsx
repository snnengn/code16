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
    <h1 className="mt-5">{product.title}</h1>
    <img src={product.image} className="w-100 img-thumbnail" alt={product.title} />
    <p>{product.description}</p>
    </>

  )
}

export default Product