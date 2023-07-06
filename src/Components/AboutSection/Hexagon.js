import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Circle.css"; // assuming the CSS is stored in a separate file called Circle.css

const Circle = () => {
  const [text, setText] = useState("Great Design"); // initial text state is "Hello"
  const texts = ["Quality  Work", "Creative Thinking", "Perfect Analysis",]; // array of texts to rotate through
  useEffect(() => {
    const interval = setInterval(() => {
      // rotate through the texts every 2 seconds
      const index = texts.indexOf(text);
      setText(texts[(index + 1) % texts.length]);
    }, 2000);
    return () => clearInterval(interval);
  }, [text, texts]);

  return (
    <div className="circle-container">
      <div className="circle">
        <span>{text}</span>
      </div>
    </div>
  );
};

const Example = () => {
  return (
    <Container style={{ color: "white", paddingTop: "200px" }}>
      <Row className="align-items-center">
        <Col xs="12" sm="6" md="12" className="text-center">
          <h2 className="heading"> What We Offer...?</h2>
          <Col xs="12" sm="6" md="12" className="mx-auto">
            <Circle />
          </Col>
        </Col>
        <Col >
          <h2 className="heading"> Why To Choose Us ...?</h2>
          <p>
          At our digital marketing company, we are passionate about 
          helping businesses of all sizes achieve their digital goals. 
          With a team of experienced professionals and cutting-edge technology,
           we offer a wide range of services to improve your online presence and drive growth
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
