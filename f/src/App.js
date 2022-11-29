import React, { createContext, useReducer } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Team from './Components/Team';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Otp from './Components/Otp';
import Registration from './Components/Registration';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import {Routes,Route} from 'react-router-dom';
import axios from 'axios';
import Home from './Pages/Home';
import { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom';
import { initialState, reducer} from "./reducer/UseReducer";


export const UserContext = createContext();
const Routing = () =>{

  

  return (
    <>
    <div>
      <Navbar/>
      
      <Routes>
        <Route exact path='/' element={ <Content />}> </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/otp' element={<Otp />}></Route>
       
      </Routes>
      <Services />
      <Team />
      <Footer />
    </div>
    </>
  );
}
const App=()=> {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    {/* <Navbar /> */}
    <Routing />
      
      </UserContext.Provider>
    </>
  );
}

export default App;
