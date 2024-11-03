import React, { useEffect, useState } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Register = () => {
  const [isGuest, setisGuest] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [userFailed, setUserFailed] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [prefix, setPrefix] = useState("Mr.");
  const [state, setState] = useState({
    createdDate: new Date(),
    userName: "",
    userEmail: "",
    userMobile: "",
    memberType: 0,
    membershipNumber: '',
    haveGuest: 0,
    userRole: "user",
    payment: 0,
    userPassword: "123456",
  });
  const [guest, setGuest] = useState({
    guestName: "",
    relation: "",
    gender: "",
    age: 0,
  });

  const registerUser = (e) => {
    e.preventDefault();
    const senddata = { ...state, ...guest };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(senddata),
    };
    fetch("http://localhost:3095/user/create/", options)
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          setUserCreated(res.success);
          setResponseMessage(res.message);
        }else if(res.success === false) {
          setUserFailed(true);
          setResponseMessage(res.message);
        }
      });
  };
  useEffect(() => {
    setState({
      createdDate: new Date(),
      userName: "",
      userEmail: "",
      userMobile: "",
      memberType: 0,
      membershipNumber: 0,
      haveGuest: 0,
      userRole: "user",
      payment: 0,
      userPassword: "123456",
    });
    setGuest({
      guestName: "",
      relation: "",
      gender: "",
      age: 0,
    });
    setisGuest(false);
  }, [userCreated]);

  return (
    <>
      <Header />
      <div className="container p-3 mt-3">
        <div className="row">
          <div className="col-md-12 mb-2 my-auto">
            <div className="p-4 border rounded shadow">
              <div className="text-left">
                <h5>
                  <b>Please Fill Name and Contact Info Here</b>
                </h5>
              </div>
              {userCreated && (
                <>
                  <div
                    className={`alert alert-${userCreated ? "success" : "danger"
                      }`}
                    role="alert"
                  >
                    {responseMessage}
                  </div>
                </>
              )}
              {userFailed && (
                <>
                  <div
                    className={`alert alert-danger`}
                    role="alert"
                  >
                    {responseMessage}
                  </div>
                </>
              )}
              <hr />
              <form onSubmit={registerUser}>
                <div className="row">
                  <div className="form-group col-md-4">
                    <label htmlFor="prefix">Prefix</label>
                    <select
                      onChange={(e) => setPrefix(e.target.value)}
                      className="custom-select my-1 mr-sm-2"
                      id="prefix"
                      value={prefix}
                    >
                      <option selected>Choose Prefix</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                  </div>
                  <div className="form-group col-md-8">
                    <label htmlFor="yourName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state?.userName}
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                      placeholder="Enter Name"
                      onChange={(e) =>
                        setState({
                          ...state,
                          userName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="yourName">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputFullName"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                      value={state?.userEmail}
                      onChange={(e) =>
                        setState({ ...state, userEmail: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="yourName">Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputMobile"
                      aria-describedby="emailHelp"
                      placeholder="Enter Mobile Number"
                      value={state?.userMobile}
                      onChange={(e) =>
                        setState({ ...state, userMobile: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="yourName">Member Type</label>
                    <select
                      onChange={(e) =>
                        setState({ ...state, memberType: e.target.value })
                      }
                      className="custom-select my-1 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                      value={state?.memberType}
                    >
                      <option selected>Choose Member Type</option>
                      <option value={1}>Patron Member</option>
                      <option value={2}>Lifetime Member</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="yourName">Membership Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail"
                      placeholder="Enter Membership Number"
                      value={state?.membershipNumber}
                      onChange={(e) =>
                        setState({ ...state, membershipNumber: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label className="font-bold" htmlFor="guest">
                      Will you have a guest with you
                    </label>
                    <input
                      type="radio"
                      id="male"
                      name="yes"
                      value="yes"
                      className="ml-2"
                      checked={isGuest === true}
                      onChange={() => {
                        setisGuest(true);
                        setState({ ...state, haveGuest: 1 });
                      }}
                    />{" "}
                    Yes
                    <input
                      type="radio"
                      id="male"
                      name="no"
                      value="no"
                      className="ml-2"
                      checked={isGuest === false}
                      onChange={() => {
                        setisGuest(false);
                        setState({ ...state, haveGuest: 0 });
                      }}
                    />{" "}
                    No
                  </div>
                  {isGuest && (
                    <>
                      <div className="form-group col-md-6">
                        <label htmlFor="yourName">Guest Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail"
                          placeholder="Enter Name"
                          onChange={(e) =>
                            setGuest({ ...guest, guestName: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="relation">Relation</label>
                        <select
                          onChange={(e) =>
                            setGuest({ ...guest, relation: e.target.value })
                          }
                          className="custom-select my-1 mr-sm-2"
                          id="inlineFormCustomSelectPref"
                          value={guest?.relation}
                        >
                          <option selected>Choose Relation</option>
                          <option value="Sopuse">Sopuse</option>
                          <option value="Children">Children</option>
                          <option value="Friend">Friend</option>
                          <option value="Relative">Relative</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="gender">Gender</label>
                        <select
                          onChange={(e) =>
                            setGuest({ ...guest, gender: e.target.value })
                          }
                          className="custom-select my-1 mr-sm-2"
                          id="gender"
                          value={state?.gender}
                        >
                          <option selected>Choose Member Type</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="age">Age</label>
                        <input
                          type="number"
                          className="form-control"
                          id="age"
                          placeholder="Enter Age"
                          onChange={(e) =>
                            setGuest({ ...guest, age: e.target.value })
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
                <button
                  type="submit"
                  className="offset-2 col-8 btn btn-primary btn-block"
                >
                  Register
                </button>
              </form>
              <hr />
              <div className="row">
                <div className="col-12 text-center">
                  <small>
                    Already Registered? <Link to="/login">Login Now</Link>
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
