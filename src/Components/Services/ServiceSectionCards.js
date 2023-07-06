import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Row, Col, Container, } from 'reactstrap';
import SearchIcon from '@mui/icons-material/Search';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

import Horizontals from '../HorizontalSection/Horizontals';
import './Services.css'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
const ServiceSectionCards = () => {
  const [hoveredCards, setHoveredCards] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredCards((prevHoveredCards) => {
      const updatedHoveredCards = [...prevHoveredCards];
      updatedHoveredCards[index] = true;
      return updatedHoveredCards;
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredCards((prevHoveredCards) => {
      const updatedHoveredCards = [...prevHoveredCards];
      updatedHoveredCards[index] = false;
      return updatedHoveredCards;
    });
  };




  const history = useNavigate();

  const moveToWebSection = () => {
    history('/web-development');
  };
  const moveToSeoSection = () => {
    history('/seo-marketing');
  };

  const moveToErpSection = () => {
    history('/erp-development');
  };

  const moveToCustomSoftwareSection = () => {
    history('/customsoftware-development');
  };








  const cards = [
    
    { 
      title: 'WEB DEVELOPMENT',
       description: 'Create a stunning website with user-friendly design and functionality.',
       icon: <FileOpenOutlinedIcon  style={{ height: '60px', width: '60px' }} />,
        button: <button class=' button ' onClick={moveToWebSection}  >Learn More</button> 
      },
    { title: 'ERP DEVELOPMENT', 
    description: 'Streamline your business operations with our powerful ERP solutions.',
    icon: <SettingsSuggestOutlinedIcon  style={{ height: '60px', width: '60px' }} />,
     button: <button class='button '  onClick={moveToErpSection} >Learn More</button>  },

    { title: 'SEO MARKETING', 
    description: 'Optimize your website for maximum online visibility. The goal of SEO is to attract more organic traffic to a website.',
    icon: <SearchIcon  style={{ height: '60px', width: '60px' }} />,
    button: <button  onClick={moveToSeoSection} class='button '>Learn More</button> 
   },
    { title: 'CUSTOMIZED SOFTWARE DEVELOPMENT', 
    description: 'Enhance your business ',
    icon: <BuildOutlinedIcon  style={{ height: '50px', width: '50px' }} />,
     button: <button  onClick={moveToCustomSoftwareSection}  class='button '>Learn More</button>  },

  ];


  










  return (
    <div>
      <Container fluid style={{ backgroundColor: '#fff' }} >
      <Row>
        <div style={{
        textAlign: 'center',
        paddingTop: '20px',
        fontFamily:'Candara',
      color:'#333',
      backgroundColor:'#fff'
      }} >

        <h1 >OUR SERVICES</h1>
       <p > Services that increase the productivity of growing businesses</p>
       <p style={{fontSize:'40px'}}>_______</p> 
       </div>
       

        {cards.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card 
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                backgroundColor: hoveredCards[index] ? '#fff' : '#1a1a1a',
                color: hoveredCards[index] ? '#1a1a1a' : 'white',
                width: hoveredCards[index] ? '3px solid black' : 'none',
                boxShadow: hoveredCards[index] ? '0px 0px 10px rgba(0, 0, 0, 0.3)' : 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease, border 0.3s ease',
                padding:'20px',
                margin:'20px'

              }}
            >
              <CardBody>
                <div
                    style={{
                      position: 'absolute', // Position the icon element
                      top: 0,
                      padding:'20px',               
                       display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    {card.icon}
                  </div>
                  <br/>
                  <br/>
                  <br/>
                  <div>
                
                <CardTitle><h3>{card.title}</h3></CardTitle>
                <p>{card.description}</p>
               
              </div>
              {card.button}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <br/>
      <br/>
     
      </Container>
      
    </div>
  );
};

export default ServiceSectionCards;
