import React from 'react';
import { Container } from 'reactstrap';

const Horizontals = ({ heading, paragraph }) => {
  return (
    <section style={{ backgroundColor: '#f1f1f1', padding: '20px' }}>
      <Container>
        <h1 style={{ color: '#333' ,fontFamily:"Cantara"}}>{heading}</h1>
        <p style={{ color: '#555',fontFamily:"Verdana" }}>{paragraph}</p>
      </Container>
    </section>
  );
};

export default Horizontals;
