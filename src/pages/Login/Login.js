import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const initialValue = {
  email: "",
  password: "",
};



const Login = () => {
  const navigate = useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
  ] = useSignInWithEmailAndPassword(auth);
  const [userData, setUserData] = useState(initialValue);
  const { email, password } = userData;
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if(user){
    navigate(from, { replace: true });
  }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
    
  };
  return (
    <div className="container my-4">
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
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>
            <div className="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
