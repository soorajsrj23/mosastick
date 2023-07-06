import React from 'react';
import { Button, Col, Row ,Container} from 'reactstrap';
import backgroundImage from '../../assets/bg7.png';
import './CallUs.css'

const CallUs = () => {
  return (
    <Container fluid className="MyComponent">
    <Row>
      <Col xs="12" md="6">
        {/* Left Side */}
      </Col>
      <Col xs="12" md="6" className="rightSide">
        {/* Right Side */}
        <h4 >GET THE PERFECT BUSINESS SOLUTION WITH US!</h4>
        <p>
        "Revolutionize your business with top-tier solutions "
        </p>
        <Button color="light" outline href="tel:+91989565518">Call Now</Button>
      </Col>
    </Row>
  </Container>
  );
};

export default CallUs;
