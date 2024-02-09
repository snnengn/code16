import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

function Category({user}) {

    const {categoryName}= useParams()
    console.log(categoryName)
    const [categoryProducts, setCategoryProducts]= useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then (res=>res.json())
        .then(res=>setCategoryProducts(res))
        .catch(err=>console.log(err))

    }, [categoryName])

  return (
    <>
    <h4 className='my-4 border rounded bg-light py-2 text-center'> {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} </h4>

    <div className='row row-cols-sm-2 row-cols-md-3'>
        {categoryProducts.map(item=><ProductCard key={item.id} item={item} />)}
    </div>
    
    </>
  )
}

export default Category