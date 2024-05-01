import logo from "../resources/logo-color.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  var token = localStorage.getItem("rh_token");
  const [btnName, setBtnName] = useState(token ? "Logout" : "Login");
  const navigate = useNavigate();
  const headerBtnClicked = () => {
    if (btnName === "Login") {
      navigate("/login");
    } else {
      localStorage.clear("rh_token");
      navigate("/login");
    }
  };

  //const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about"> About Us </Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/collect-points">Collect Points </Link>
          </li>
          <button className="login" onClick={headerBtnClicked}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
