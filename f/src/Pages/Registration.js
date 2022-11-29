import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [pincode, setPincode] = useState("");
    const [state, setState] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [bloodgroup, setBloodgroup] = useState("");


    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);



    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !address || !district || !pincode || !state || !age ||
            !gender || !bloodgroup) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("sanskarEmail", JSON.stringify(email));
            localStorage.setItem(
                "sanskarPassword",
                JSON.stringify(password)
            );
            console.log("Saved in Local Storage");

            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }




    return (
        <>

            <div>
                {" "}
                {login ? (
                    <form onSubmit={handleFormSubmit}>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Full Name"
                                name="name"
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone No.</label>
                            <input
                                type="Phone"
                                className="form-control"
                                placeholder="Enter contact no"
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your address"
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>District</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter district"
                                onChange={(event) => setDistrict(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Pin Code</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter pin code"
                                onChange={(event) => setPincode(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter state"
                                onChange={(event) => setState(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter your age"
                                onChange={(event) => setAge(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <Form.Control
                                as="select"
                                onChange={(event) => setGender(event.target.value)}
                            >
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </div>

                        <div className="form-group">
                            <label>Blood Group</label>
                            <Form.Control
                                as="select"
                                onChange={(event) => setBloodgroup(event.target.value)}
                            >
                                <option>A</option>
                                <option>B</option>
                                <option>AB</option>
                                <option>O</option>
                            </Form.Control>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">
                            Register
                        </button>
                        <p onClick={handleClick} className="forgot-password text-right">
                            Have an account?{" "}Login

                        </p>
                        {flag && (
                            <Alert color="primary" variant="danger">
                                I got it you are in hurry! But every Field is important!
                            </Alert>
                        )}
                    </form>
                ) : (
                    <Login />
                )}
            </div>

        </>
    );
}

export default Registration;