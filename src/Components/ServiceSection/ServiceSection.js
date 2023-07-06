import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import s1 from '../../assets/s6.png'
import s2 from '../../assets/s7.png'
import s3 from '../../assets/s2.jpg'
import s4 from '../../assets/s3.jpg'
import TypingParagraph from '../TypeEffect/TypingParagraph';
import TypingText from '../TypeEffect/TypingText';
import './ServiceSection.css'
import Header from '../../Components/Header/Header'
import Footer from '../Footer/Footer';
import backgroundImage from'../../assets/bg8.png'
import Helmet from '../Helmet/Helmet';
const ServiceSection = () => {



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
       <Helmet title={'Services'}/>
        <Header/>
       <div style={styles.container}>
      <Container>
        <div style={styles.text}>
      <TypingText text='OUR SERVICES' speed={100} />
      </div>
      </Container>
    </div>
      <Container fluid>
        <br/>
        <br/>
          <Row>
            <Col sm={6} className="d-flex flex-column justify-content-center">
              <div>
              <h3 className='runningText'>
                <TypingText text='WEB DEVELOPMENT' speed={50}/>
                </h3>
                <TypingParagraph text="Web development involves creating websites and web applications 
                using various programming languages and frameworks such as HTML, CSS, JavaScript, and ReactJS. 
                Web developers are responsible for building the user interface, creating dynamic content,
                 and implementing functionality on the website or web application." speed={50} />
                <p></p>
              </div>
            </Col>
            <Col sm={6} className="d-flex align-items-center">
              <img
                src={s1}
                alt="About Us "
                className="img-fluid grayscale-image"
              />
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ backgroundColor: '#1a1a1a',color:'#fff' }}>
          <Row>
            <Col sm={6} className="d-flex flex-column justify-content-center">
              <div>
              <h3 className='runningText'>
                <TypingText text='SEO MARKETING' speed={50}/>
                </h3>
                <TypingParagraph text="SEO (Search Engine Optimization) is the practice of optimizing websites
                 and web content to improve their visibility in search engine results pages (SERPs).
                  SEO involves various techniques such as keyword research, on-page optimization, link building,
                 and content creation to help websites rank higher in search engine results." speed={50} />
                <p></p>
              </div>
            </Col>
            <Col sm={6} className="d-flex align-items-center">
              <img
                src={s2}
                alt="About Us "
                className="img-fluid grayscale-image"
              />
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ backgroundColor: '#1a1a1a',color:'#fff' }}>
          <Row>
            <Col sm={6} className="d-flex flex-column justify-content-center">
              <div>
              <h3 className='runningText'>
                <TypingText text='CUSTOMIZED SOFTWARE DEVELOPMENT' speed={50}/>
                </h3>
                <TypingParagraph text="Customized software development involves creating software that is tailored
                 to meet the specific needs of a business or organization.
                  Custom software development can help businesses automate their processes, improve efficiency,
                   and increase productivity. Custom software development typically involves working closely with the 
                   client to understand their requirements,
                 designing and developing the software, testing it, and deploying it." speed={50} />
                <p></p>
              </div>
            </Col>
            <Col sm={6} className="d-flex align-items-center">
              <img
                src={s3}
                alt="About Us "
                className="img-fluid grayscale-image"
              />
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ backgroundColor: '#1a1a1a',color:'#fff' }}>
          <Row>
            <Col sm={6} className="d-flex flex-column justify-content-center">
              <div>
                <h3 className='runningText'>
                <TypingText text='ERP DEVELOPMENT' speed={50}/>
                </h3>
                <TypingParagraph text="ERP (Enterprise Resource Planning) is a type of software that is used
                 to manage business operations such as financials, human resources, and inventory management.
                  It allows businesses to automate and streamline their operations, making them more efficient and effective. ERP software typically consists of modules that are designed to handle different aspects of the business, such as accounting, payroll, 
                inventory management, customer relationship management, and more." speed={50} />
                <p></p>
              </div>
            </Col>
            <Col sm={6} className="d-flex align-items-center">
              <img
                src={s4}
                alt="About Us "
                className="img-fluid grayscale-image  "
              />
            </Col>
          </Row>
          <br/>
        <br/>
        <br/>
        </Container>
        
        <Footer/>
    </Container>
  );
};

export default ServiceSection;
