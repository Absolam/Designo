import facebook from "../assets/shared/desktop/icon-facebook.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";

export const HomeFooter = () => {
  return (
    <div className="home-footer">
      <div className="footer-logo-name">
        <div className="oval" />
        <p>DESIGNO</p>
      </div>
      <div className="footer-bar"></div>
      <div className="footer-links">
        <p>Our company</p>
        <p>Locations</p>
        <p>Contact</p>
      </div>
      <div className="footer-address-containers">
        <div className="footer-first-address">
          <p className="footer-address-bold">Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="footer-second-address">
          <p className="footer-address-bold">Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div className="footer-social-media-container">
          <img src={facebook} alt="facebook" />
          <img src={youtube} alt="youtube" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};
