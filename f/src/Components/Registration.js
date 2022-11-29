import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

import Login from "./Login";
import './Registration.css';

function Registration() {
  

const history = useNavigate();

const [user, setUser] = useState({
  name:"", email:"", password:"", cpassword:"", phone_number:"",age:"", address:"", district:"",pincode:"",state:"",gender:"",blood_group:""
});

let name, value;
const handleInputs = (e) => {
  console.log(e);
  name = e.target.name;
  value = e.target.value;

  setUser({...user, [name]:value});

}



const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword, phone_number,age, address, district,pincode,state,gender,blood_group } = user;
////////////////////////////////////////////
    // if(validate(user.adhar)){
      const res = await fetch("/worker", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name, email, password, cpassword, phone_number,age, address, district,pincode,state,gender,blood_group
        })
      });
  
      const data = await res.json();
  
      if(res.status === 422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      }
      else{
        window.alert("Successfull");
        console.log("Successfull");
  
        history ("/otp");
  
      }
    // }
    // else{
    //   window.alert("Invalid adhar");
    // }
//////////////////////////////////// adhar validation
    
}

 
  return (
    <>
 
      <div className="reg-form">
        {" "}
          {/* {login ? ( */}
            <div className="container">
              <div className="row justify-content-center">
              <div className="col-sm-8 col-sm-offset-2 text">
                 <h1><strong>Register Yourself</strong></h1>
              </div>
              </div>
              <div className="row justify-content-center">
              <div className="col-sm-8 col-sm-offset-2 form-box">
              <form className='form-horizontal'>
              <div className="form-group row">
                <label className="p-0">Name</label>
                <input type="text" className="form-control" placeholder="Enter Full Name" name="name" value={user.name}
              onChange={handleInputs}/>
              </div>

              <div className="form-group row">
                <label className="p-0">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email" value={user.email}
              onChange={handleInputs}/>
              </div>

              <div className="form-group row">
                <div className="form-group col p-0">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="password" value={user.password}
              onChange={handleInputs}/>
                </div>
                <div className="form-group col p-r-0">
                <label> Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm password" name="cpassword" value={user.cpassword}
              onChange={handleInputs}/>
                </div>
              </div>

              <div className="form-group row">
                <div className="form-group col p-0">
                <label>Phone Nomber</label>
                <input type="Phone" className="form-control" placeholder="Enter contact no" name="phone_number" value={user.phone_number}
              onChange={handleInputs}/>
                </div>
                
              <div className="from-group col">
              
                <label>Age</label>
                <input type="text"className="form-control" placeholder="Enter your age" name="age" value={user.age}
              onChange={handleInputs}/>
                </div>
              </div>
              
              <div className="form-group row">
                <label className="p-0">Address</label>
                <input type="text" className="form-control" placeholder="Enter your address" name="address" value={user.address}
              onChange={handleInputs}/>
              </div>
              <div className="form-group row">
                <label className="p-0">District</label>
                <input type="text" className="form-control" placeholder="Enter district" name="district" value={user.district}
              onChange={handleInputs}/>
              </div>
              
              <div className="form-group row">
                <div className="form-group col p-0">
                <label>Pin Code</label>
                <input type="text" className="form-control" placeholder="Enter Pin Code" name="pincode" value={user.pincode}
              onChange={handleInputs}/>
                </div>
                <div className="form-group col p-r-0">
                <label> State</label>
                <input type="password" className="form-control" placeholder="State" name="state" value={user.state}
              onChange={handleInputs}/>
                </div>
              </div>
              <div className="form-group row">
                 <div className="form-group col p-0">
                 <label>Gender</label>
                <Form.Control
                  as="select"
                  name="gender"
                  value={user.gender}
              onChange={handleInputs}>
                  <option>Choose..</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
                 </div>
                 <div className="form-group col"> 
                 <label>Blood Group</label>
                <Form.Control as="select"
                name="blood_group"
                value={user.blood_group}
              onChange={handleInputs}>
                  <option>Choose..</option>
                  <option>A</option>
                  <option>B</option>
                  <option>AB</option>
                  <option>O</option>
                </Form.Control>
                 </div>
              </div>

              {/* <div className="form-group row">
                
              </div> */}
              <center>
              <button type="submit" className="btn btn-default" onClick={PostData}>Register</button></center>
              <p  className="forgot-password text-left">Have an account?<Link to="/login"><u>Login</u></Link> </p>
            {/* {flag && (
              <Alert color="primary" variant="danger">Every Field is Required!</Alert>
            )} */}
        </form>
        </div>
      </div>
    </div>
          {/* // ) : (
          //   <Login />
          // )} */}
        </div>
    
    </>
  );
}

export default Registration;