import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "./firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          Tour Lover Pro
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2 text-uppercase">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item mx-2 text-uppercase">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/services"}
              >
                Services
              </Link>
            </li>
            <li className="nav-item mx-2 text-uppercase">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/blogs"}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item mx-2 text-uppercase">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/about"}
              >
                About
              </Link>
            </li>
            {user ? (
              <li className="nav-item mx-2 text-uppercase">
                <button
                  onClick={() => signOut(auth)}
                  className="nav-link btn btn-outline-info"
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item mx-2 text-uppercase">
                  <Link className="nav-link" to={"/register"}>
                    Register
                  </Link>
                </li>
                <li className="nav-item mx-2 text-uppercase">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
