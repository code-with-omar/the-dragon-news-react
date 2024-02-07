import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./RightNav.css";
import { Link } from "react-router-dom";
const RightNav = () => {
    return (
        <div className="right-navbar-wrap">
            <h2 className="fs-20 fw-600 mb-3">Login With</h2>
            <div className="right-navbar-content">

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
        </div>
    );
};

export default RightNav;