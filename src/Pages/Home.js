import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import ServiceSectionCards from '../Components/Services/ServiceSectionCards';
import AboutUs from '../Components/About/AboutUs';
import OurQualities from '../Components/Quality/OurQualities'
import Footer from '../Components/Footer/Footer';
import Helmet from '../Components/Helmet/Helmet';
function Home(props) {
  return (
    <div className="homeParentDiv">
      <Helmet title={'Home'}/>
      <Header />
      <Banner />
      <AboutUs/>
      <OurQualities/>
      <ServiceSectionCards/>
      <Footer/>
      
      
      
   
    </div>
  );
}

export default Home;
 
