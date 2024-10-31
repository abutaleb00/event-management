import React, { useState } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Register = () => {
  const [isGuest, setisGuest] = useState(false)
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMobile, setInputMobile] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const registerUser = (e) => {
    e.preventDefault();

    const registerUser = {
      userName: inputName,
      userEmail: inputEmail,
      userMobile: inputMobile,
      userPassword: inputPassword,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerUser),
    };
    fetch("http://localhost:3095/user/create/", options)
      .then((response) => response.json())
      .then((res) => {
        setUserCreated(res.success);
        setResponseMessage(res.message);
      });
  };

  return (
    <>
      <Header />
      <div className="container p-3 mt-3">
        <div className="row">
          <div className="col-md-12 mb-2 my-auto">
            <div className="p-4 border rounded shadow">
              <div className="text-center">
                <h5>
                  <b>Register</b>
                </h5>
              </div>
              {userCreated ? (
                <>
                  <div
                    className={`alert alert-${
                      userCreated ? "success" : "danger"
                    }`}
                    role="alert"
                  >
                    {responseMessage}
                  </div>
                </>
              ) : (
                ""
              )}
              <hr />
              <form onSubmit={registerUser}>
                <div className="row">
                <div className="form-group col-md-6">
                <label for="yourName">Your Name</label>
                  <input 
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    onChange={(e) => setInputName(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                <label for="yourName">Full Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputFullName"
                    aria-describedby="emailHelp"
                    placeholder="Full Name"
                    onChange={(e) => setInputEmail(e.target.value)}
                  />
                </div>
                </div>
                <div className="row">
                <div className="form-group col-md-6">
                <label for="yourName">Mobile Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputMobile"
                    aria-describedby="emailHelp"
                    placeholder="Enter Mobile Number"
                    onChange={(e) => setInputMobile(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                <label for="yourName">Enter Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    placeholder="Enter Email"
                    onChange={(e) => setInputPassword(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                <label for="yourName">Member Type</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                </div>
                <div className="form-group col-md-6">
                <label for="yourName">Membership Number</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                </div>
                <div className="form-group col-md-12">
                <label className="font-bold" for='guest'>Will you have a guest with you</label>
                <input type="radio" id="male" name="gender" value="male" className="ml-2" onChange={()=>setisGuest(true)} /> Yes
                <input type="radio" id="male" name="gender" value="male" className="ml-2" onChange={()=>setisGuest(false)} /> No
                </div>
                  {isGuest && 
                  <div className="form-group col-md-6">
                  <label for="yourName">Guest Name</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail"
                      placeholder="Enter Name"
                      onChange={(e) => setInputPassword(e.target.value)}
                    />
                  </div>
                  }
                </div>
                <button type="submit" className="offset-2 col-8 btn btn-primary btn-block">
                  Get Register
                </button>
              </form>
              <hr />
              <div className="row">
                <div className="col-12 text-center">
                  <small>
                    Already Have Account? <Link to="/login">Login Now</Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
