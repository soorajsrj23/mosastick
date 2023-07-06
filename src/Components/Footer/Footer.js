import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FullLogo from '../../assets/logofull.png'
import './Footer.css'
const Footer = () => {
  return (
    <footer style={{backgroundColor:'#1a1a1a',color:'#fff'}}>
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <img src={FullLogo} alt="Your logo" height='150px' width='150px' />
           
            <p> 2023 MOSASTICK TECHNOLOGIES </p>
            <p>All Rights Reserved ©</p>
            
          </Col>
          <Col md={12} className="text-left">
          <a class="my-link"   href='/web-development'>WEB DEVELOPMENT </a><br/>
          <a class="my-link" href='/seo-marketing'>SEO MARKETING </a><br/>
          <a class="my-link" href='/erp-development'>ERP DEVELOPMENT </a><br/>
          <a class="my-link" href='/customsoftware-development'>CUSTOMIZED SOFTWARE DEVELOPMENT </a>
          <br/>
          <br/>
          </Col>
          
        </Row>
        
      </Container>
    </footer>
  );
};

export default Footer;
