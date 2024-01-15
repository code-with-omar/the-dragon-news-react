import "./Header.css";
import logo from "../../../assets/logo.png";
import moment from 'moment';
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="text-center">
                    <img src={logo} alt="" />
                    <p className="fs-18 fw-400 mt-3 dark-03 "><small>Journalism Without Fear or Favour</small></p>
                    <p className="fs-18 fw-500 fs-20 mb-4">{moment().format("dddd, MMMM DD, YYYY")}</p>
                </div>
                <div className="d-flex latest-news-section bg-dark-07">
                    <Button className="button bg-pink me-1">Latest</Button>
                    <Marquee className="dark-02 fs-18 fw-600">
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </Container>
        </header>
    );
};

export default Header;