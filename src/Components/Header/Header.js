import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';
import './Header.css';
import FullLogo from '../../assets/logofull.png'



export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor:'#1a1a1a'}} dark expand="md" fixed='top'>
  <a href="/">
    <img src={FullLogo} alt="Your logo" height="50px" width="50px"/>
  </a>
  <NavbarToggler onClick={this.toggle} />
  <Collapse isOpen={this.state.isOpen} navbar>
    <Nav className="ms-auto" navbar>
      <NavItem>
        <NavLink href="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/about-section">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/service-section">Services</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/contact-form">Contact</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>

      </div>
    );
  }
}