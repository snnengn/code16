import React from 'react'

const Sepet = ({sepet, bosSepet}) => {
    const toplam = sepet.reduce((acc, item) => acc + item.fiyat + 29, 0)

    if(sepet.length === 0) return;
  return (
    <div className='border sticky top-20 bg-white ml-auto w-72 p-4 mt-2 rounded-lg shadow-xl'>
<h2 className='text-2xl font-semibold mb-4'>Sepet</h2>
<ul>
    {sepet.map((item)=> (
        <li className='mt-2 flex justify-between'>
            <span>{item.name} </span>
            <span>{item.fiyat}</span>
        </li>
    ))}
</ul>
<hr className='my-4'/>
<p className='font-semibold test-xl'>Kargo: 29 TL</p>
<p className='font-semibold test-xl'>Toplam: {toplam} TL</p>
<button className='bg-red-600 text-white px-4 py-2 rounded w-full hover:bg-red-800 transition-all mt-4' onClick={bosSepet}>Sepeti Boşalt</button>
    </div>
  )
}

export default Sepet