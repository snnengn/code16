import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Left from './Left';
import Right from './Right';

function Content() {
  return (

    <Container fluid>
      <Row id="content" className="row align-items-center">
        
        <Left />
        <Right />
        
      </Row>
    </Container>);
}

export default Content;