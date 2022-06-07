import canadaImg from "../../assets/locations/desktop/image-map-canada.png";
import australiaImg from "../../assets/locations/desktop/image-map-australia.png";
import unitedKingdomImg from "../../assets/locations/desktop/image-map-united-kingdom.png";
import "./Locations.css";
import { useEffect, useRef } from "react";
import { MenuModal } from "../../Components/MenuModal";
import { GetInTouchModal } from "../../Components/GetInTouchModal";
import { HomeFooter } from "../../Components/HomeFooter";

export const Locations = ({ menuModal, setMenuModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Designo | Locations";
    setMenuModal(false);
  }, []);

  return (
    <div>
      {menuModal && <MenuModal />}
      <div className="locations">
        <div className="locations-card-container">
          <img src={canadaImg} alt="" />
          <div className="location-card project-card-text">
            <h3>Canada</h3>
            <div className="location-card-address">
              <h4>Designo Central Office</h4>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="location-card-contact">
              <h4>Contact</h4>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>
        <div className="locations-card-container">
          <img src={australiaImg} alt="" />
          <div className="project-card-text location-card">
            <h3>Australia</h3>
            <div className="location-card-address">
              <h4>Designo Central Office</h4>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="location-card-contact">
              <h4>Contact</h4>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>
        <div className="locations-card-container">
          <img src={unitedKingdomImg} alt="" />
          <div className="project-card-text location-card">
            <h3>United Kingdom</h3>
            <div className="location-card-address">
              <h4>Designo Central Office</h4>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="location-card-contact">
              <h4>Contact</h4>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>
        <GetInTouchModal />
      </div>
      <HomeFooter />
    </div>
  );
};
