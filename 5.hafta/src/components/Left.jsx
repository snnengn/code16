import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Left() {
  return (
    <>
      <Col md={3} id="left" className="bg-light border-end d-flex flex-column justify-content-center">
        <Image src="https://avatars.githubusercontent.com/u/108197925?v=4" roundedCircle className="img-fluid border border-5 mx-auto mt-5 d-block" width="250" height="250"/>
          <h2 class="display-6 mt-5 my-3 text-center">Sinan Engin</h2>

          <ListGroup className="list-group list-group-flush text-center mb-5 pb-5">
          <ListGroup.Item variant="light">Biologist & Front-End Developer</ListGroup.Item>
          <ListGroup.Item variant="light">Bursa / Turkey</ListGroup.Item>
          <ListGroup.Item variant="light">Uludag University</ListGroup.Item>
          <ListGroup.Item variant="light fs-4">
            <a href="https://github.com/snnengn"><i class="fa-brands fa-github text-dark pe-2"></i></a>
            <a href="https://linkedin.com/in/sinan-engin"><i class="fa-brands fa-linkedin text-dark pe-2"></i></a>
            <a href="https://instagram.com/snnengn"><i class="fa-brands fa-instagram text-dark pe-2"></i></a>
            <a href="https://x.com/snn_engn"><i class="fa-brands fa-x-twitter text-dark pe-2"></i></a>
            <a href="mailto:sinanengin@yandex.com"><i class="fa-regular fa-envelope text-dark"></i></a>
          </ListGroup.Item>

        </ListGroup>
        </Col>
    </>
  );
}

export default Left;