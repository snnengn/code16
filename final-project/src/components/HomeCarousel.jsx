import {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel({data}) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container my-3">
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item >         
        <img
          className="object-fit-cover border rounded w-100"
          src={slide.image}
          alt="slider image"
          style={{height:400}}
        />
        <Carousel.Caption  className="bg-dark opacity-75 rounded-pill m-4 fw-bold">
          <h3>{slide.ADI}</h3>
          <p>{slide.ILCE}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
    </div>
  );
}
export default HomeCarousel;