import Categories from "./Categories"
import Category from "./Category"
import { Outlet } from "react-router-dom"


function ProductLayout() {
  return (
    <>
    <div className='row'>
<div className='col-sm-3'>
    <Categories/>

</div>
<div className='col-sm-9'>
    <Outlet />
</div>


    </div>
    
    </>
  )
}

export default ProductLayout