import menuIcon from "../assets/shared/mobile/icon-hamburger.svg";
import { Link } from "react-router-dom";

export const Header = ({ menuModal, setMenuModal }) => {
  return (
    <div className="header">
      <Link to="/Designo" className="header-logo-name">
        <div className="oval" />
        <h1>DESIGNO</h1>
      </Link>
      <img src={menuIcon} alt="" onClick={() => setMenuModal(!menuModal)} />
    </div>
  );
};
