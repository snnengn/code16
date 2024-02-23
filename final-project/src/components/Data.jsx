

function Data({data}) {
    

  return (
    <div className='container m-auto'>
      <h1 className=' text-center fw-bold '>Bursa Buyuksehir Belediyesi Plajlari</h1>
      <div>
        {data.map(nokta => (
          <div key={nokta.id} className=' bg-info-subtle my-5 p-5 rounded'>
            <h3 className='fw-bold'>{nokta.ADI}</h3>
            <h4>{nokta.ILCE}</h4>
            <h4>{nokta.MAHALLE}</h4>
            <h4>{nokta.eposta}</h4>

          
          </div>
        ))}
      </div>
    </div>
  );
}



export default Data