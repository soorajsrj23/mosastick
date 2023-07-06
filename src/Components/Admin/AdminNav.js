import React from 'react';
import { Navbar, Nav, NavItem, NavLink,NavbarText } from 'reactstrap';
import { useContext } from 'react';
import {AuthContext} from '../../store/Context'
import { toast } from 'react-toastify';
import { auth } from '../../Firebase/Config';
import { useNavigate } from 'react-router-dom';
const AdminNav = () => {

    const history = useNavigate();
    const {user}= useContext(AuthContext);


  const handleSignOut = () => {
    // Add signout logic here
    if(user)
    {
     auth.signOut();
     history('/')
     toast("signed out")
     
    }
  };

  return (
    <Navbar color="dark" dark expand="md">
      <Nav className="ms-auto" navbar>
       <NavbarText>Welcome {user?user.email:''}</NavbarText>

        <NavItem>
          <NavLink onClick={handleSignOut}>Sign Out</NavLink>
        </NavItem>
        
      </Nav>
    </Navbar>
  );
};

export default AdminNav;
