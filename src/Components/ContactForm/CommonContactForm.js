import React, { useState } from 'react';
import { Form, FormGroup, Button,Row,Col } from 'reactstrap';
import {Container} from 'reactstrap';
import 'firebase/firestore';
import backgroundImage from '../../assets/bg9.png';
import { db } from '../../Firebase/Config';
import './CommonContactForm.css'
import { collection,addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import Helmet from '../Helmet/Helmet';
const CommonContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [phone,setPhone] = useState('');
  const date=new Date();


  const  addToProjectRequest =()=>{
    const docRef =  addDoc(collection(db, "Request"), {
      
     clientName:name,
     email:email,
     subject: subject,
     description:description,
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





  return (
    <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>
       <Helmet title={'Contact Us'}/>
       <Container className=' align-items-center pt-4'>
      <h4 className='headingfirst' >Let Us Discuss</h4>
            <h6 className='headingfirst'> Just Fill The Form And Let's Work Together</h6>

            </Container>
      
      
            <Container className='d-flex justify-content-center align-items-center pt-5'>
    <Form  >
    
      
      <Row>
        <Col  xs="12" md="6" className="mb-3 mb-md-0" >
          <FormGroup>
            
            <input type="text" name="name"
             value={name}
             onChange={(e) =>
               setName(e.target.value)}
            id="name" placeholder="Name"
             className='bgdark'
             required
             />
             
          </FormGroup>
          
          <FormGroup>
            
            <input type="number" name="phone"  value={phone}
          onChange={(e) =>
            setPhone(e.target.value)} id="phone" placeholder="Phone" className='bgdark' />
          </FormGroup>
         
        </Col>
        <Col xs="12" md="6" className=" mb-3 mb-md-0">
        <FormGroup>
            
            <input type="email"
             value={email}
             onChange={(e) =>
               setEmail(e.target.value)}
            name="email" id="email" placeholder="Email" className='bgdark' />
          </FormGroup>
          <FormGroup>
            
            <input type="text" 
            name="projectBudget"
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)}
            id="projectBudget" placeholder="Subject" className='bgdark' />
          </FormGroup>
          
        
        </Col>



      </Row>
      <Row>
      <FormGroup>
        <center>
  
  <textarea  className='whiteclass'
   name="projectDescription"
   value={description}
   onChange={(e) =>
     setDescription(e.target.value)}
   
   placeholder="Write about  your project" style={{ width: "55%", height: "100px",backgroundColor:'transparent',color:'white' }} />
  </center>
</FormGroup>

      </Row>
      <center>
      <Button   onClick={addToProjectRequest} outline color='light' >Submit</Button>
      </center>
      
    </Form>
    </Container>
    </div>
  );
};

export default CommonContactForm;
