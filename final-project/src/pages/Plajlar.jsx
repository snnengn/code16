import Row from 'react-bootstrap/esm/Row';
import Cards from '../components/Cards'

function Plajlar({data}) {


  return (
    <>
        <div className='container bg-light mt-3 border rounded'>
      <h1 className='text-center m-0 py-3 text-info text-opacity-75'>Bursa Plajları</h1>
    </div>
    <Row className='container border bg-light rounded mx-auto my-3 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
    {data.map(plaj=> (


      <Cards key={plaj.id} plaj={plaj}/>
      
         ))} 
         </Row>
    </>
  );
}

export default Plajlar