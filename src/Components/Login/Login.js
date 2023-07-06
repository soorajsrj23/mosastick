import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Config'
import { Label,Input,Button,FormGroup,Row,Col,Form,Container } from 'reactstrap';
import './Login.css'
import { toast } from 'react-toastify';
import Logo from '../../assets/logoShort.png'
import ViewProjectRequest from '../Admin/ViewProjectRequest';
import AdminNav from '../Admin/AdminNav';
import Header from '../Header/Header'
import ViewContactReq from '../Admin/ViewContactReq';

function Login() {

    
    const [email,setEmail] =useState('');
    const [password,setPassword]=useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   
    
    const history =useNavigate();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log('signed in');
          toast('You are signed in');
          setIsLoggedIn(true); // Update login status
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorCode);
          console.log(errorCode);
          console.log(errorMessage);
        });
    };
   
     return (
      <Container style={{backgroundColor:'#1a1a1a',color:'#fff'}} fluid >
        <br/>
        <br/>
        <Header/>
  <Row className="justify-content-center pt-5">
    <Col xs={12} sm={10} md={8} lg={6}>
      
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" className='bgdark custom-input'  name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" className='bgdark custom-input'  name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormGroup>
          
        </Form>
        <center>
        <Button onClick={handleSubmit}>Login</Button>
        </center>
  
    </Col>
  </Row>
  
  <AdminNav/>
  
  {isLoggedIn && (
    <Row className="justify-content-center pt-5">
      <Col xs={12} sm={10} md={8} lg={6}>
        <ViewProjectRequest />
        <br/>
        <br/>
        <ViewContactReq/>
       
      </Col>
    </Row>
  )}
</Container>

      
     );
}

export default Login