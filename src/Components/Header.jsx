import menuIcon from "../assets/shared/mobile/icon-hamburger.svg";
import { Link } from "react-router-dom";

export const Header = ({ menuModal, setMenuModal, width }) => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to="/Designo" className="header-logo-name">
          <div className="oval" />
          <h1>DESIGNO</h1>
        </Link>
        {width < 600 && (
          <img src={menuIcon} alt="" onClick={() => setMenuModal(!menuModal)} />
        )}
        {width > 600 && (
          <div className="header-links-no-modal">
            <Link to="/Designo/about">OUR COMPANY</Link>
            <Link to="/Designo/locations">LOCATIONS</Link>
            <Link to="/Designo/contact">CONTACT</Link>
          </div>
        )}
      </div>
    </div>
  );
};
