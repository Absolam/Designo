import "./Contact.css";
import { useEffect } from "react";
import canadaImg from "../../assets/shared/desktop/illustration-canada.svg";
import australiaImg from "../../assets/shared/desktop/illustration-australia.svg";
import unitedKingdomImg from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import { Button } from "../../Components/Button";
import { LocationCard } from "../../Components/LocationCard";
import { HomeFooter } from "../../Components/HomeFooter";
import { MenuModal } from "../../Components/MenuModal";

export const Contact = ({ menuModal, setMenuModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Designo | About Us";
    setMenuModal(false);
  }, []);
  return (
    <div className="contact-container">
      {menuModal && <MenuModal />}
      <div className="contact-hero">
        <div className="contact-hero-text">
          <h3>Contact Us</h3>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className="contact-hero-not-text">
          <div className="form-inputs">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Your Message" />
          </div>
          <Button text="SUBMIT" clName="contact-submit-button" />
        </div>
      </div>
      <div className="about-cards">
        <LocationCard
          header="CANADA"
          img={canadaImg}
          clName2="desc-card-locations"
        />
        <LocationCard
          header="AUSTRALIA"
          img={australiaImg}
          clName2="desc-card-locations"
        />
        <LocationCard
          header="UNITED KINGDOM"
          img={unitedKingdomImg}
          clName2="desc-card-locations"
        />
      </div>
      <HomeFooter clName="contact-footer" />
    </div>
  );
};
