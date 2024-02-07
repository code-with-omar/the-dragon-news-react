import { FaGoogle, FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./RightNav.css";
import { Link } from "react-router-dom";
const RightNav = () => {
    return (
        <div className="right-navbar-wrap">
            <h2 className="fs-20 fw-600 mb-3">Login With</h2>
            <div className="right-navbar-login">

                <Link to="/">
                    <div className="right-nav-login-with d-flex  border border-success rounded align-items-center justify-content-center mb-2">
                        <span><FaGoogle /></span>
                        <p className="mt-3 ms-3">Login with Google</p>
                    </div>
                </Link>
                <Link to="/">
                    <div className="right-nav-login-with d-flex  border border-dark rounded align-items-center justify-content-center mb-2 dark-02">
                        <span><FaGithub /></span>
                        <p className="mt-3 ms-3">Login with GitHub</p>
                    </div>
                </Link>

            </div>
            <h2 className="fs-20 fw-600 mt-5">Find Us On</h2>
            <div className="right-navbar-find-us">
                <div className="find-us-on rounded-top d-flex  border border-success p-4 fs-16 fw-500 dark-03 align-items-center">
                    <div className="find-us-icon text-center rounded-3">
                        <FaFacebookF className="find-us-icon-fb" />
                    </div>

                    <span className="ms-2">Facebook</span>
                </div>
                <div className="find-us-on border-top-0 d-flex  border border-success p-4 fs-16 fw-500 dark-03 align-items-center">
                    <div className="find-us-icon text-center rounded-3">
                        <FaTwitter className="find-us-icon-twitter" />
                    </div>

                    <span className="ms-2">Twitter</span>
                </div>
                <div className="find-us-on border-top-0 d-flex  border border-success p-4 fs-16 fw-500 dark-03 align-items-center">
                    <div className="find-us-icon text-center rounded-3">
                        <FaInstagram className="find-us-icon-instagram" />
                    </div>

                    <span className="ms-2">Instagram</span>
                </div>
            </div>
        </div>
    );
};

export default RightNav;