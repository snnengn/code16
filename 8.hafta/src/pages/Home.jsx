import { Products } from "../products"

function Home({user}) {
  
  return (
    <>
    <Products user={user}/>
    </>
  )
}

export default Home