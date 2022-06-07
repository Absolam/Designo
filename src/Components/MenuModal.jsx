import { Link } from "react-router-dom";

export const MenuModal = () => {
  return (
    <div className="menu-modal">
      <nav className="menu-modal-nav-container">
        <Link className="menu-modal-nav" to="/Designo/about">
          OUR COMPANY
        </Link>
        <Link className="menu-modal-nav" to="/Designo/locations">
          LOCATIONS
        </Link>
        <Link className="menu-modal-nav" to="/Designo/contact">
          CONTACT
        </Link>
      </nav>
    </div>
  );
};
