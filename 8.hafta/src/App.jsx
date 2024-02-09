import Navbar from './components/Navbar'
import './App.css'
import SiteRoutes from './SiteRoutes'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Footer from './components/Footer'


function App() {
  const [user, setUser]=useState(null)
  const navigate=useNavigate()

useEffect(()=>{
  setUser(JSON.parse(localStorage.getItem("user"))??null)
},[])

  const handleLogin=()=>{
      const user={id:1, name:"Sinan"}
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
      <Footer/>
    </>
  )
}
export default App
