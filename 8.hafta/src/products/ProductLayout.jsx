import Categories from "./Categories"
import { Outlet } from "react-router-dom"


function ProductLayout() {
  return (
    <>
    <div className='row'>
<div className='col-xs-0 col-sm-2'>
    <Categories/>

</div>
<div className='col-xs-12 col-sm-10'>
    <Outlet/>
</div>


    </div>
    
    </>
  )
}

export default ProductLayout