import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import './ContactForm.css'
import backgroundImage from '../../assets/bg7.png';
import TypingText from '../TypeEffect/TypingText';
import Header from '../../Components/Header/Header'
import Location from '../Location/Location';
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react';
import { collection,addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../../Firebase/Config';
import Helmet from '../Helmet/Helmet';
const ExampleForm = () => {




  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const [projectTimeframe, setProjectTimeframe] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const date=new Date();



  const  onSubmitContactReq =()=>{
    const docRef =  addDoc(collection(db, "ContactRequest"), {
      
     clientName:name,
     email:email,
     phone:phone,
     city:city,
     budget:projectBudget,
     TimeRange:projectTimeframe,
     description:projectDescription,
      WritedOn :date.toDateString()
    })
    .then(()=>
      {
      
        toast("Request Submitted Succesfully");
        
      }).catch((error)=>{
     const  show= error.errorMessage;
       toast(show);
      })
    
   }  



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
           <Helmet title={'Contact Us'}/>
            <Header/>
       <div style={styles.container}>
      <Container>
        <div style={styles.text}>
      <TypingText text='CONTACT US' speed={100} />
      </div>
      </Container>
    </div>

     <Location/>

     <Container className='align-items-center'>
    <Form  >
      
      <Row>
        <Col  xs="12" md="6" className="mb-3 mb-md-0" >
          <FormGroup>
            <Label for="name" className='whiteclass'>Name</Label><br/>
            <input type="text"  value={name}
          onChange={(e) =>
            setName(e.target.value)} name="name" id="name" placeholder="Enter your name" className='bgdark' />
          </FormGroup>
          <FormGroup>
            <Label for="phone" className='whiteclass'>Phone</Label><br/>
            <input type="tel"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)}
            name="phone" id="phone" placeholder="Enter your phone number" className='bgdark' />
          </FormGroup>
          <FormGroup>
            <Label for="email" className='whiteclass'>Email</Label><br/>
            <input type="email" 
             value={email}
             onChange={(e) =>
               setEmail(e.target.value)}
            name="email" id="email" placeholder="Enter your email address" className='bgdark' />
          </FormGroup>
        </Col>
        <Col xs="12" md="6" className=" mb-3 mb-md-0">
          <FormGroup>
            <Label for="city" className='whiteclass'>City</Label><br/>
            <input type="text"
             value={city}
             onChange={(e) =>
               setCity(e.target.value)}
            name="city" id="city" placeholder="Enter your city" className='bgdark' />
          </FormGroup>
          <FormGroup>
            <Label for="projectBudget" className='whiteclass'>Project Budget</Label><br/>
            <input type="text" 
            
            value={projectBudget}
            onChange={(e) =>
              setProjectBudget(e.target.value)}name="projectBudget" id="projectBudget" placeholder="Enter your project budget" className='bgdark' />
          </FormGroup>
          <FormGroup>
            <Label className='whiteclass' for="projectTimeframe">Project Timeframe</Label><br/>
            <input type="text" 
             value={projectTimeframe}
             onChange={(e) =>
               setProjectTimeframe(e.target.value)}
            name="projectTimeframe" id="projectTimeframe" placeholder="Enter your project timeframe" className='bgdark' />
          </FormGroup>
        </Col>
      </Row>
      <Row>
      <FormGroup>
        <center>
  <Label for="projectDescription" className='whiteclass'>Project Description</Label><br/>
  <textarea  name="projectDescription" 
   value={projectDescription}
   onChange={(e) =>
     setProjectDescription(e.target.value)}
  placeholder="Enter a description of your project" style={{ width: "55%", height: "100px",backgroundColor:'#1a1a1a',color:'white' }} />
  </center>
</FormGroup>

      </Row>
      <center>
      <Button onClick={onSubmitContactReq} outline color='light' >Submit</Button>
      </center>
      
    </Form>
    </Container>
    <br/>
    <br/>
    <Footer/>
    
    </Container>
  );
};

export default ExampleForm;
