import { FaGoogle, FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Qzone1 from "../../../../src/assets/qZone1.png"
import Qzone2 from "../../../../src/assets/qZone2.png"
import Qzone3 from "../../../../src/assets/qZone3.png"
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
            <div className="bg-dark-07 mt-4">
                <h2>Q-Zone</h2>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
            <div className="create-amazing-newspaper p-4 mt-4">
                <h2 className="white fs-30 fw-600 mb-3">Create an Amazing Newspaper</h2>
                <p className="fs-16 fw-500 white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="button btn-create-amazing-newspaper">Learn More</button>
            </div>
        </div>
    );
};

export default RightNav;