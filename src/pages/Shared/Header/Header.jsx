import "./Header.css";
import logo from "../../../assets/logo.png";
import moment from 'moment';
const Header = () => {
    return (
        <header className="header">

            <div className="text-center">
                <img src={logo} alt="" />
                <p className="fs-18 fw-400 mt-3 dark-03 "><small>Journalism Without Fear or Favour</small></p>
                <p className="fs-18 fw-500 fs-20 mb-4">{moment().format("dddd, MMMM DD, YYYY")}</p>
            </div>
        </header>
    );
};

export default Header;