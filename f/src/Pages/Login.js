import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import img from "./images/login.jpg";


const Login = () => {
  const history=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  
  const loginUser=async(e)=>{
       e.preventDefault();
       const res=await fetch('/login',{
         method:"POST",
         headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
       });
       const data= await res.json();
       console.log(data.password);
       if(res.status===400 || !data){
          Swal.fire({
            title:"Invalid Credintials",
            icon:"warning",
            confimButtonText:"Ok",
            timer: 2000
          });
       }
       else{
        
        Swal.fire({
          title:"Login Successful",
          icon:"success",
          confimButtonText:"Ok",
          timer: 2000
        })
        history('/about');
       }
  }
  return (
    <>
      <div className='container-fluid bdr'>
        <section className='login py-5 px-20'> 
           <div className='container-lg bdr1'>
            <div className='row g-6'>
              <div className='col-lg-5 px-0'>
                     <img className="img-fluid" src={img} alt='login'></img>
              </div>
              <div className='col-lg-7 text-center'>
                <h2> Login</h2>
                <form method='POST'>
                  <div className='form-row py-3'>
                    <div className='offset-1 col-lg-10 py-3'>
                        <input type='text' className="inp" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder='Email' />
                    </div>
                  </div>
                  <div className='form-row py-2'>
                    <div className='offset-1 col-lg-10'>
                        <input type='password' className="inp" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder='Password' />
                    </div>
                  </div>
                  <div className='form-row py-5'>
                    <div className='offset-1 col-lg-10'>
                        <button className="btn1" type='submit' onClick={loginUser}>Login</button>
                    </div>
                  </div>
                  

                </form>
              </div>

            </div>
           </div>
        </section>
      
      </div>
    </>
  )
}

export default Login
