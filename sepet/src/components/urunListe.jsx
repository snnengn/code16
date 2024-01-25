import React from 'react'
import Urun from './urun'
import urunData from "../urunData";

const UrunListe = (props) => {
  return (
    <div id="urun" className="my-5 px-10 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {urunData.map((urun)=> (
        <Urun key={urun.id} urun={urun} urunSepet={props.urunSepet}/>
    ))}
    </div>
  )
}

export default UrunListe;