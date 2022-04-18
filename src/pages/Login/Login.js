import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import {  useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const [userData, setUserData] = useState(initialValue);
  const { email, password } = userData;
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  let location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";
  

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  
  const handleForgotPassword = async () => {
    if (!email) {
      toast("Please give your email first");
      return;
    }
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };
  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="container my-4">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example1">
                Email address
              </label>
              <input
                value={email}
                name="email"
                onChange={handleChange}
                type="email"
                id="form2Example1"
                className="form-control"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
              <input
                value={password}
                name="password"
                onChange={handleChange}
                type="password"
                id="form2Example2"
                className="form-control"
              />
            </div>

            <div className="row mb-4">
              <div className="col">
                <button className="btn text-primary underline" onClick={handleForgotPassword}>
                  Reset password
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
