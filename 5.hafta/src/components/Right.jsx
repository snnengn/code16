import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Right() {
  return (
    <>
      <Col>
        <Row md={9} className="flex-lg-row-reverse align-items-center mx-2">
          <Col className="col-10 col-sm-10 col-lg-6">
          <Image
              src="https://media.licdn.com/dms/image/D4D22AQHbDuDtPZ9i9A/feedshare-shrink_2048_1536/0/1702896614342?e=1707350400&v=beta&t=jIEz_MPouqS-ahbTvt1Wf4nQs9r6f7irHg0-ODQ_NOI"
              className="d-block mx-lg-auto img-fluid rounded" alt="..." width="600" height="500"/>
          </Col>

          <Col className="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 my-3">Hello there, I’m Sinan!</h1>
            <p class="lead my-4">I am taking software training in the Code16 Basic Software Program, which is conducted in collaboration with Üretken Academy and Bursa Metropolitan Municipality.
             Follow me to see the projects I have done during the training.</p>
             <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a class="btn btn-primary btn-lg px-4" href="https://linkedin.com/in/sinan-engin" role="button"><i
                  class="fa-brands fa-linkedin"> </i> Linkedin</a>
              <a class="btn btn-dark btn-lg px-4" href="https://github.com/snnengn" role="button"><i
                  class="fa-brands fa-github"> </i> Github</a>
            </div>
          </Col>
        </Row>
        
        </Col>
    </>
  );
}

export default Right;