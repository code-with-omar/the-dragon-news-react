import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import defaultImge from "../../../assets/user.png"
import "./UserNamBar.css"
const UserNavBar = () => {
    return (
        <div className="d-flex  ms-lg-auto mt-3 user-navbar-content">
            <Navbar expand="lg" className="user-navbar">
                <Container>
                    {/* Hamburger Menu */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Navbar Collapse */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto user-navbar-links">
                            <Link className="dark-03 fs-18 fw-400 me-5 ms-0" to='/home'>Home</Link>
                            <Link className="dark-03 fs-18 fw-400 me-5" to='/bout'>About</Link>
                            <Link className="dark-03 fs-18 fw-400 " to='/career'>Career</Link>
                        </Nav>
                    </Navbar.Collapse>

                    {/* Brand Logo on the Right */}

                </Container>
            </Navbar>
            <div className="user-navbar-user d-flex ms-auto">
                <img src={defaultImge} alt="" className="img-fluid user-navbar-user-img" />
                <Link className="btn fs-20 fw-600 bg-dark-02 white user-login-btn ms-3" to="/login">Login</Link>
            </div>
        </div>
    );
};

export default UserNavBar;
