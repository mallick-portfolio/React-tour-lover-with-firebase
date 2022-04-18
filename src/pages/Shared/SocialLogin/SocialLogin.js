import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import {  ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    const navigate = useNavigate()
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";
    
    
    if (googleLoading || githubLoading || facebookLoading) {
      return <Loading />
    }
    if (googleUser || githubUser || facebookUser) {
      navigate(from, { replace: true })
    }
    let getError = ""
    if (googleError || githubError || facebookError) {
      getError = "login failed. Please try again"
    }
  return (
    <div className="text-center">
      <ToastContainer />
      
      <p>or sign up with:</p>
      <button onClick={()=>signInWithFacebook()} type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-facebook-f"></i>
      </button>

      <button
        onClick={() => signInWithGoogle()}
        type="button"
        className="btn btn-link btn-floating mx-1"
      >
        <i className="fab fa-google"></i>
      </button>
      <button
        onClick={() => signInWithGithub()}
        type="button"
        className="btn btn-link btn-floating mx-1"
      >
        <i className="fab fa-github"></i>
      </button>
      <h4 className="text-center text-danger">{getError}</h4>
    </div>
  );
};

export default SocialLogin;
