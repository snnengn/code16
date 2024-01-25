  import React from "react";
 
  const Urun = ({ urun, urunSepet }) => {

    const sepeteEkle = (urun)=> {
        urunSepet((prevState) => [...prevState, urun]);
    };

    return (
        
        <div className="flex flex-col justify-center p-6 m-4 bg-white rounded-xl shadow-xl">
          <img className="object-cover rounded-t-md" src={urun.image} alt="" />
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-700">{urun.name}</h1>
            <p className="text-sm mt-2 text-gray-700">3 Renk</p>
            <div className="mt-3 space-x-4 flex p-1 justify-center">
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-red-200 hover:scale-105 transition transform duration-200">
                <span className="block h-6 w-6 bg-red-400 rounded-full"> </span>
              </div>
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200">
                <span className="block h-6 w-6 bg-blue-400 rounded-full"> </span>
              </div>
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                <span className="block h-6 w-6 bg-yellow-400 rounded-full"> </span>
              </div>
            </div>
            <div className="mt-4 mb-2 flex flex-col justify-between pl-4 pr-2">
              <button className="block text-xl font-semibold text-gray-700 cursor-auto">{urun.fiyat} TL</button>
              <button className="text-lg block font-semibold py-2 mt-4 px-6 text-green-100 hover:text-white bg-green-400 hover:bg-green-600 rounded-lg shadow hover:shadow-md transition duration-300" onClick={() => sepeteEkle(urun)}>Sepete Ekle</button>
            </div>
          </div>
        </div> 
      

    );
  }
  
  export default Urun;
  