import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const initialValue = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [userData, setUserData] = useState(initialValue);
  const [check, setCheck] = useState(false);
  const { name, email, password, confirmPassword } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length <= 5) {
      toast("Password length must be 6 character or more");
      return;
    }
    if (password !== confirmPassword) {
      toast("your password doesn't match");
      return;
    }
    if (error) {
      toast("Your email is already exist");
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6">
          <div className="card rounded-3 shadow-lg">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
              alt=""
              className="w-100"
            />
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-2 pb-2">Registration Info</h3>
              <ToastContainer />

              <form onSubmit={handleSubmit} className="px-md-2">
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="userName">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    id="userName"
                    required
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={handleChange}
                    required
                    name="email"
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={handleChange}
                    required
                    name="password"
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your Password"
                  />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="conPassword">
                    Confirm Password
                  </label>
                  <input
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                    name="confirmPassword"
                    type="password"
                    id="conPassword"
                    className="form-control"
                    placeholder="Re Type your Password"
                  />
                </div>
                <div className="form-outline my-4">
                  <Form.Check
                    onChange={(e) => setCheck(e.target.checked)}
                    type="switch"
                    id="custom-switch"
                    label="Are you want to register?"
                  />
                </div>
                <p className="text-center text-primary"><Link to={"/login"}>Already Have an Account</Link></p>

                <button disabled={!check} type="submit" className="btn btn-primary btn-lg mb-1">
                  Submit
                </button>
                <SocialLogin />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
