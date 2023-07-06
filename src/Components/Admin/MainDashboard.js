import React,{ useContext } from 'react'
import { AuthContext } from '../../store/Context'
import ViewProjectRequest from './ViewProjectRequest';


function MainDashboard() {
  
    const {user}=useContext(AuthContext)
    const email =user.email;
    const id=user.uid;
    console.log(email+'hi')
    if ((email ==='sreenip18@gmail.com') || (id==='4BnsVSSxZJPVxhTsY7a9svujmzj1') )
    return (
        <ViewProjectRequest/>
    )

    else{
        return 'null'
    }
}

export default MainDashboard