import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel({ data }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container mt-2 shadow p-0 rounded">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide) => {
          return (
            <Carousel.Item key={slide.id}>
              <img
                className="object-fit-cover w-100 rounded"
                src={slide.image}
                alt="slider image"
                style={{ height: 600 }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-25 rounded-pill m-4 p-1 fw-medium">
                <h5 className="p-0 m-0">{slide.ADI}</h5>
                <p className="p-0 m-0">
                  {slide.MAHALLE}-{slide.ILCE}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default HomeCarousel;
