import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className='text-start border-top bg-light text-dark p-3'>
        2024 © <a class="text-decoration-none text-secondary" href='https://linkedin.com/in/sinan.engin' title='Sinan Engin'>Sinan Engin</a>
    </Container>
  );
}

export default Footer;