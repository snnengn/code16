import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Plajlar from "./pages/Plajlar";
import PageNotFound from './pages/PageNotFound';
function SiteRoutes({data}) {
  return (
    <Routes>              
    <Route path="/" element={<Home data={data}/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/plajlar" element={<Plajlar data={data}/>} />
    <Route path="*" element={<PageNotFound/>} />
  </Routes>
  )
}

export default SiteRoutes