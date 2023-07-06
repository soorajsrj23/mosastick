import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import s1 from '../../assets/s7.png'

import TypingText from '../TypeEffect/TypingText';

import Header from '../../Components/Header/Header'
import Footer from '../Footer/Footer';
import backgroundImage from'../../assets/bg8.png'
import './Web.css'
import CommonContactForm from '../ContactForm/CommonContactForm';
import Helmet from '../Helmet/Helmet';

const Seo = () => {

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
       <Helmet title={'SEO'}/>
        <Header/>
       <div style={styles.container}>
      <Container>
        <div style={styles.text}>
      <TypingText text='SEO MARKETING' speed={100} />
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
              Boost Your Visibility 
                </h3>
                <p> SEO (Search Engine Optimization) is a powerful digital marketing technique that can help
                     businesses of all sizes to increase their online visibility, attract more customers, and 
                     drive revenue growth. By optimizing their websites and content for search engines like Google,
                     businesses can improve their rankings in search results,
                     making it easier for customers to find them online.
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

export default Seo;
