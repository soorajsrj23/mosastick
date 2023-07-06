import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Location.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import backgroundImage from '../../assets/bg6.png'



const Location = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', padding: '20px' }}>
      <Container className="transparent-container">
        <Row>
          <Col md="6" lg="6" sm="12">
            <div className="section">
              <div className="logo">
              <LocationOnOutlinedIcon  style={{ height: '50px', width: '50px' }} />
              </div>
              <div className='description'>
    
              <p className="text glow-on-hover">TAZ Tower ,Second Floor Office #101,Palakkad-calicut Highway 966,Aryambavu Mannarkkad,palakkad -67583</p>

              </div>
            </div>
          </Col>
          <Col md="6" lg="3" sm="12" >
            <div className="section" >
              <div className="logo">
              <LocalPhoneOutlinedIcon  style={{ height: '50px', width: '50px' }} />
              </div>
              <div className='description'> 
              <p className="text glow-on-hover">+91 989565518</p>
              

              </div>
            </div>
          </Col>
          <Col md="6" lg="3"  sm="12">
            <div className="section">
              <div className="logo">
              <AlternateEmailOutlinedIcon  style={{ height: '50px', width: '50px' }} />
              </div>
              <div className='description'>
    
              <p className="text glow-on-hover">sreenip18@gmail.com</p>

              </div>
            </div>
          </Col>
          </Row>
        {/* Add the remaining rows and columns for the other sections */}
      </Container>
   
    </div>
  );
};

export default Location;
