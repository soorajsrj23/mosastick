import React from 'react';
import {  Container } from 'reactstrap';
import './AboutSection.css'
import backgroundImage from '../../assets/bg6.png';
import TypingText from '../TypeEffect/TypingText';
import Header from '../../Components/Header/Header'
import Location from '../Location/Location';
import Footer from '../../Components/Footer/Footer';
import {Col,Row} from 'reactstrap';
import TypingParagraph from '../TypeEffect/TypingParagraph'
import laptop from '../../assets/laptop.jpg';
import Hexagon from './Hexagon';
import CallUs from '../HorizontalSection/CallUs';
import Horizontals from '../HorizontalSection/Horizontals';
import Helmet from '../Helmet/Helmet';


const ExampleForm = () => {
  window.scrollTo(0, 0);
  const onSubmit = e => {
    e.preventDefault();
    // Do something with form data
    console.log(e.target.elements);
  };

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
    
        <Container fluid style={{backgroundColor:'#1a1a1a'}}>
           <Helmet title={'About'}/>
            <Header/>
       <div style={styles.container}>
      <Container>
        <div style={styles.text}>
      <TypingText  text='ABOUT US' speed={100} />
      </div>
      </Container>
    </div>
    <Container style={{ backgroundColor: '#1a1a1a',color:'#fff',paddingTop:'25px' }}>
    <br/>
          <br/>
          <Row>
            <Col sm={6} className="d-flex flex-column justify-content-center">
              <div>
                <h2 className='subheading' >
                <TypingText  text='WHO WE ARE ...?' speed={50}/>
                </h2>
                <TypingParagraph text="Welcome to our company! We are a dedicated team of professionals passionate about
                     providing top-quality services to our clients.
                     With years of experience in the industry, 
                    we strive to deliver outstanding results and exceed expectations." speed={50} />
              
              </div>
            </Col>
            <Col sm={6} className="d-flex align-items-center">
              <img
                src={laptop}
                alt="About Us Image"
                className="img-fluid grayscale-image"
              />
            </Col>
          </Row>
        </Container>
         <Container style={{paddingBottom:'60px'}}>
          <Hexagon content="Initial Content"/>
         </Container>
         <Container fluid style={{textAlign:'center'}} >
          <Horizontals heading="Have A Project In Your Mind " paragraph=" contact us to take your digital strategy to the next level"/>
        </Container>
        


         <Container fluid>
          <CallUs/>
         </Container>
        
          <Footer/>
         
    
    </Container>
  );
};

export default ExampleForm;
