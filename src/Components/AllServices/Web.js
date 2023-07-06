import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import s1 from '../../assets/s6.png'
import s2 from '../../assets/s7.png'
import s3 from '../../assets/s2.jpg'
import s4 from '../../assets/s3.jpg'
import TypingParagraph from '../TypeEffect/TypingParagraph';
import TypingText from '../TypeEffect/TypingText';

import Header from '../../Components/Header/Header'
import Footer from '../Footer/Footer';
import backgroundImage from'../../assets/bg8.png'
import './Web.css'
import CommonContactForm from '../ContactForm/CommonContactForm';
import Helmet from '../Helmet/Helmet';
const Web = () => {

  window.scrollTo(0, 0);

  const styles = {
    container: {
      position: 'relative',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '60vh'
    },
    text: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      fontSize: '3rem',
      fontFamily:'Josephin Sans',
      letterSpacing: '15px',
      fontWeight: '600',
      fontSize: '15px',
    }
  };







  return (
    <Container fluid style={{backgroundColor:'#1a1a1a',color:'white'}}>
       <Helmet title={'Web development'}/>
        <Header/>
       <div style={styles.container}>
      <Container>
        <div style={styles.text}>
      <TypingText text='WEBSITE DEVELOPMENT' speed={100} />
      </div>
      </Container>
    </div>
      <Container fluid>
        <br/>
        <br/>
          <Row>
           
            <Col sm={6} className="d-flex align-items-center">
              <img
                src={s1}
                alt="About Us "
                className="img-fluid grayscale-image"
              />
            </Col>
            <Col sm={6} className="d-flex flex-column justify-content-center a">
              <div>
              <h3 className='subheadweb'>
                 EFFICEINT WEBSITES 
                </h3>
                <p> "Web development involves creating websites and web applications 
                using various programming languages and frameworks such as HTML, CSS, JavaScript, and ReactJS. 
                Web developers are responsible for building the user interface, creating dynamic content,
                 and implementing functionality on the website or web application."
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <CommonContactForm/>
        <Footer/>
    </Container>
  );
};

export default Web;
