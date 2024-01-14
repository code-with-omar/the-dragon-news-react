import logo from "../../../assets/logo.png";
import moment from 'moment';
const Header = () => {
    return (
        <header>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
            </div>
        </header>
    );
};

export default Header;