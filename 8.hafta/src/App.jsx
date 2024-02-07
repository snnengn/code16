import Navbar from './components/Navbar'
import './App.css'
import SiteRoutes from './SiteRoutes'


function App() {

  return (
    <>
                  <Navbar />
      <div className="container">
        <div className="col-sm-12">

            <SiteRoutes/>

        </div>
      </div>
    </>
  )
}
export default App
