import React from 'react';
import './AboutUs.css'
import WhoImg from '../../assets/who.jpg';
import { useState } from 'react';
import TypingText from '../TypeEffect/TypingText';
import { Container, Row, Col } from 'reactstrap';
import TypingParagraph from '../TypeEffect/TypingParagraph';
import Horizontals from '../HorizontalSection/Horizontals';


const AboutUs = () => {


    const [isImageColored, setIsImageColored] = useState(false);

    const handleMouseEnter = () => {
      setIsImageColored(true);
    };
  
    const handleMouseLeave = () => {
      setIsImageColored(false);
    };
  
  

  return (
    <div>
         
         <section style={{ backgroundColor: '#1a1a1a', height: '100vh' }}>
        <Container style={{ backgroundColor: '#1a1a1a',color:'#fff' }}>
          <br/>
          <br/>
          <Row>
            <Col sm={6} className="d-flex flex-column justify-content-center ">
              <div >
                <TypingText text='WHO WE ARE..?' speed={150}/>
                <TypingParagraph     text="Welcome to our company! We are a dedicated team of professionals passionate about
                     providing top-quality services to our clients.
                     With years of experience in the industry, 
                    we strive to deliver outstanding results and exceed expectations."  speed={100} />
                <p></p>
              </div>
            </Col>
            <Col sm={6} className="d-flex align-items-center">
              <img
                src={WhoImg}
                alt="About Us Image"
                className="img-fluid grayscale-image"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
