import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import s1 from '../../assets/s3.jpg'
import TypingText from '../TypeEffect/TypingText';

import Header from '../../Components/Header/Header'
import Footer from '../Footer/Footer';
import backgroundImage from'../../assets/bg8.png'
import './Web.css'
import CommonContactForm from '../ContactForm/CommonContactForm';
import Helmet from '../Helmet/Helmet';

const Erp = () => {

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
       <Helmet title={'ERP'}/>
        <Header/>
       <div style={styles.container}>
      <Container>
        <div style={styles.text}>
      <TypingText text='ERP DEVELOPMENT' speed={100} />
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
              Revolutionize Your Business
                </h3>
                <p> Enterprise Resource Planning (ERP) development is all about
                     creating powerful software systems that help businesses 
                     streamline their operations and maximize their potential. 
                     By integrating a range of key business functions into a single platform,
                      ERP systems enable organizations to work more efficiently and effectively,
                     driving productivity, profitability, and growth.
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

export default Erp;
