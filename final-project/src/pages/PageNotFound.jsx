import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <h1 className='mt-5 mx-5 pt-5'>404 sayfa bulunamadı</h1>
    <Link to="/" className="mx-5 btn btn-info"> Anasayfaya Gitmek için tıklayın.</Link>
    </>
  )
}

export default PageNotFound