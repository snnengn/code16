import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import SiteRoutes from "./SiteRoutes";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("/src/data/data.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Navbar data={data} />
      <SiteRoutes data={data} />
      <Footer />
    </>
  );
}

export default App;
