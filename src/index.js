import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Context} from './store/Context'
import { FirebaseContext } from './store/Context';
import firebase from './Firebase/Config'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(

<FirebaseContext.Provider value={{firebase}}>
    
    <Context>
    <App />
    <ToastContainer
position="top-right"
autoClose={3000}
closeOnClick
pauseOnFocusLoss
pauseOnHover={false}
theme="colorfull"
/>
    </Context>
    </FirebaseContext.Provider>

, document.getElementById('root'));
