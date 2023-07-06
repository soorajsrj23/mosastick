import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import s1 from '../../assets/s2.jpg'
import TypingText from '../TypeEffect/TypingText';

import Header from '../../Components/Header/Header'
import Footer from '../Footer/Footer';
import backgroundImage from'../../assets/bg8.png'
import './Web.css'
import CommonContactForm from '../ContactForm/CommonContactForm';
import Helmet from '../Helmet/Helmet';
const CustomSoftware = () => {
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
      <Helmet title={'Custom Software'}/>
        <Header/>
       <div style={styles.container}>
      <Container>
        <div style={styles.text}>
      <TypingText text='CUSTOMIZED SOFTWARE DEVELOPMENT' speed={100} />
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
              TAILORED SOLUTIONS FOR YOU
                </h3>
                <p>Customized software development is a game-changer for businesses looking to stay ahead of the competition. 
                  It allows companies to create unique software solutions tailored to their specific needs,
                   resulting in improved efficiency, productivity, and overall profitability.
                    By collaborating with a team of skilled developers,
                   businesses can bring their ideas to life and design software that seamlessly integrates with their existing processes.
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

export default CustomSoftware;
