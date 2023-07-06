import React from 'react';
import { useEffect ,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { AuthContext } from './store/Context';
import { FirebaseContext } from './store/Context';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MainDashboard from './Components/Admin/MainDashboard';
import { auth } from './Firebase/Config'; 
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

import ContactForm from './Components/ContactForm/ContactForm';
import AboutSection from './Components/AboutSection/AboutSection';
import ServiceSection from './Components/ServiceSection/ServiceSection';
import Web from './Components/AllServices/Web';
import Seo from './Components/AllServices/Seo';
import Erp from './Components/AllServices/Erp';
import CustomSoftware from './Components/AllServices/CustomSoftware';
import Login from './Components/Login/Login';
import ViewProjectRequest from './Components/Admin/ViewProjectRequest';



function App() {

  
  const {user,setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  
  useEffect(()=>{
 
   onAuthStateChanged(auth, (user) => {
 if (user) {
   setUser(user);  
   console.log("user is",user)
   console.log("firebase is",firebase) 
   const uid = user.uid;
         
 } else {
   // User is signed out
 
 }
});
   
   
  })


  return (
    <div>
        <Router>  
    <Routes>
    <Route exact path="/" element={<><Home/></>}/>
    <Route  path="/contact-form" element={<><ContactForm/></>}/>
    <Route  path="/about-section" element={<><AboutSection/></>}/>
    <Route  path="/service-section" element={<><ServiceSection/></>}/>
    <Route  path="/web-development" element={<><Web/></>}/>
    <Route  path="/seo-marketing" element={<><Seo/></>}/>
    <Route  path="/erp-development" element={<><Erp/></>}/>
    <Route  path="/customsoftware-development" element={<><CustomSoftware/></>}/>
    <Route  path="/adminlogin" element={<><Login/></>}/>
    
    

    
     
      </Routes>
     </Router>
    


      </div>
  );
}

export default App;
