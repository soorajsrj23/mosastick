import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './OurQualities.css'
import ComputerIcon from '@mui/icons-material/Computer';
import backgroundImage from '../../assets/bg6.png'
import PersonIcon from '@mui/icons-material/Person';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TimelineIcon from '@mui/icons-material/Timeline';
const MyComponent = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', padding: '20px' }}>
      <Container className="transparent-container">
        <Row>
          <Col md="6">
            <div className="section">
              <div className="logo">
              <ComputerIcon  style={{ height: '40px', width: '40px' }} />
              </div>
              <div className='description'>
              <b>USES NEW TECHNOLOGIES</b><br/>
              <p>Modern problems needds latest strategy  to find the best solution</p>

              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="section">
              <div className="logo">
              <PersonIcon  style={{ height: '40px', width: '40px' }} />
              </div>
              <div className="description">
              <b>CUSTOMER ORIENTED SERVICE</b><br/>
              <p>We help in the quest to improve the bottom line and fuel top-line growth by unlocking the inherent opportunities available.</p>

              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <div className="section">
              <div className="logo">
              <DeveloperModeIcon  style={{ height: '40px', width: '40px' }} />
              </div>
              <div className='description'>
              <b> UNDERSTANDING CUSTOMER INSIGHTS</b><br/>
              <p>We care about customers’ insight to understand what the consumers need.</p>

              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="section">
              <div className="logo">
              <LeaderboardIcon  style={{ height: '40px', width: '40px' }} />
              </div>
              <div className="description">
              <b>LONG LASTING RESULTS</b><br/>
              <p>We solve critical business problems with a stable quality impact on business growth.</p>

              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <div className="section">
              <div className="logo">
              <TroubleshootIcon  style={{ height: '40px', width: '40px' }} />
              </div>
              <div className='description'>
              <b>DATA AND ANALYTICS</b><br/>
              <p>Proper management and analysis of data to drive business processes & improve business outcomes.</p>

              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="section">
              <div className="logo">
              <BorderColorIcon  style={{ height: '40px', width: '40px' }} />
              </div>
              <div className="description">
              <b>KNOWLEDGE ABOUT ALL MARKETS</b><br/>
              <p>Specific knowledge about all market trends including customers’ preferences, relative efficiency etc.</p>

              </div>
            </div>
          </Col>
        </Row>
        

        {/* Add the remaining rows and columns for the other sections */}
      </Container>
    </div>
  );
};

export default MyComponent;
