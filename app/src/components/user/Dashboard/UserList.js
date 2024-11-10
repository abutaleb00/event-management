import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Modal from "../../modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from 'moment'
const UserList = () => {
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = useState();
  const token = localStorage.getItem("token");
  const [isModalOpen, setModalOpen] = useState(false);

  const [userList, setuserList] = useState([]);
  const [guestsList, setGuestsList] = useState([]);

  const getuserList = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        nani_header_key: token,
      },
    };
    fetch("http://localhost:3095/user/userlist/", options)
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          setuserList(res.results);
        } else {
          toast.error(`${res.message}`);
          // localStorage.removeItem("token");
          navigate("/login");
        }
      });
  };
  const getGuestList = (guestid) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        nani_header_key: token,
      },
    };
    fetch(`http://localhost:3095/user/guests/${guestid}`, options)
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          setGuestsList(res.results);
        } else {
          toast.error(`${res.message}`);
        }
      });
  };
  const getPaymentList = (guestid) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        nani_header_key: token,
      },
    };
    fetch(`http://localhost:3095/user/payments/${guestid}`, options)
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          // setGuestsList(res.results);
          console.log("payment", res)
        } else {
          toast.error(`${res.message}`);
        }
      });
  };
  useEffect(() => {
    if (token !== null || undefined) {
      getuserList();
    } else {
      navigate("/login");
    }
  }, [navigate, token]);

  return (
    <>
      <Header />
      <div className="container mt-3 pt-3">
        <h1>Register User List</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email Address</th>
              <th scope="col">Member Type</th>
              <th scope="col">Membership Number</th>
              <th scope="col">Guest?</th>
              <th scope="col">Payment</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {userList?.length > 0 &&
              userList?.map((v, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{moment(v?.create_date).format('DD-MM-YYYY hh:mm')}</td>
                    <td>{v?.user_name}</td>
                    <td>{v?.user_mobile}</td>
                    <td>{v?.user_email}</td>
                    <td>
                      {v?.member_type === 1
                        ? "Patron Member"
                        : "Lifetime Member"}
                    </td>
                    <td>{v?.membership_number}</td>
                    <td>{v?.have_guest === 0 ? "No" : "yes"}</td>
                    <td>
                      {v?.payment === 1 ? (
                        <span onClick={() => getPaymentList(v?.user_id)} className="text-success">Paid</span>
                      ) : (
                        <span className="text-danger">Unpaid</span>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          getGuestList(v?.user_id);
                          setModalOpen(true);
                        }}
                        className="btn btn-primary"
                      >
                        Guests
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <h3>Guest List</h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Relation</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Age</th>
                </tr>
              </thead>
              <tbody>
                {guestsList?.length > 0 &&
                  guestsList?.map((v, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{v?.guest_name}</td>
                        <td>{v?.relation}</td>
                        <td>{v?.gender}</td>
                        <td>{v?.age} Years</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Modal>
        )}
      </div>
    </>
  );
};

export default UserList;
