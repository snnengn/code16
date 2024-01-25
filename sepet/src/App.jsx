import React, { useState } from 'react'
import Nav from './components/nav'
import Footer from './components/footer'
import UrunListe from './components/urunListe'
import Sepet from './components/sepet'
import './App.css'

function App() {
const [sepet, urunSepet] = useState([]);
const bosSepet = () => {
  urunSepet([])
}
  return (
    <>
    <div className='sticky top-0'>
    <Nav sepet={sepet} />
    <Sepet sepet={sepet} bosSepet={bosSepet} />
    </div>
    <UrunListe sepet={sepet} urunSepet={urunSepet}/>  
    <Footer />
    </>
  )
}

export default App
