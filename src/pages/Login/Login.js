import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [userData, setUserData] = useState(initialValue);
  const { email, password } = userData;
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  let location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle();
    navigate("/");
  };
  const handleGithubLogin = () => {
    signInWithGithub();
    navigate("/");
  };
  const handleForgotPassword = async () => {
    if(!email){
      toast('Please give your email first')
      return;
    }
      await sendPasswordResetEmail(email);
      toast("Sent email");
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
                <button className="btn"
                  onClick={handleForgotPassword}
                >
                  Reset password
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>
            <div className="text-center">
              <p>
                Not a member? <Link to={'/register'}>Register</Link>
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button
                onClick={handleGoogleLogin}
                type="button"
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-google"></i>
              </button>
              <button
                onClick={handleGithubLogin}
                type="button"
                className="btn btn-link btn-floating mx-1"
              >
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
