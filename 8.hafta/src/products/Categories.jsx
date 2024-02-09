import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Categories({user}) {
    const[categories, setCategories]= useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(res=>setCategories(res))
    }, [])
  return (
    <>
    
    <div className="list-group mt-4">
      <span className='list-group-item list-group-item-action fw-bold bg-light'>Kategoriler</span>
        {
            categories.map((category,index) =>
            <Link
            key={index}
            className="list-group-item list-group-item-action"
            to={`/products/category/${category}`}
            >
            {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
            )
        }

    
</div>
    
    </>
  )
}

export default Categories