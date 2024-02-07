import Navbar from './components/Navbar'
import './App.css'
import SiteRoutes from './SiteRoutes'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"


function App() {
  const [user, setUser]=useState(null)
  const navigate=useNavigate()

  const handleLogin=()=>{
      const user={id:1, name:"sinan"}
      setUser(user)
      localStorage.setItem("user",JSON.stringify(user))
      navigate("/")

  }
  const handleLogOut=()=>{
    localStorage.removeItem("user")
    setUser(null)
  }
console.log(user)
  return (
    <>
            <Navbar handleLogOut={handleLogOut} user={user} />
      <div className="container">
        <div className="col-sm-12">

            <SiteRoutes handleLogin={handleLogin} user={user}/>

        </div>
      </div>
    </>
  )
}
export default App
