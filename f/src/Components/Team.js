
import person from './images/person.jpg';
import './Team.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Team() {
    const history = useNavigate();
  const [userData, setUserData] = useState({});
    const calldashboardPage = async () => {
        try {
          const res = await fetch('/dashboard', {
            method: "GET",
            headers: {
              Accept:"application/json",
              "Content-Type": "application/json"
            },
            credentials:"include"
          });
      
          const data = await res.json();
          console.log(data);
          setUserData(data);
      
          if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
          }
      
      
        } catch (err) {
          console.log(err);
          history ('/login');
        }
      } 
    useEffect(() => {
        calldashboardPage();
      }, []);
    return (
        <div>
            <h1 className='team'>Our Team</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="card">
                            <img src={person} alt='' className="card-img-top"></img>
                            <div className="card-body">
                            <h3 className='card-text'>aaaGangwar</h3>                               
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card">
                            <img src={person} alt='' className="card-img-top"></img>
                            <div className="card-body">
                            <h3 className='card-text'>Ajeet Singh</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card">
                            <img src={person} alt='' className="card-img-top"></img>
                            <div className="card-body">
                               <h3 className='card-text'>Divyanshu Patel</h3>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        
    );
}

export default Team
