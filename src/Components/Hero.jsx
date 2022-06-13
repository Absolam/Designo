import "../Routes/Home/Home.css";
import phone from "../assets/home/desktop/image-hero-phone.png";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const Hero = ({ width }) => {
  return (
    <div className="hero">
      <div className="hero-text">
        {width > 768 ? (
          <div className="hero-text-large-display">
            <h2>Award-winning custom designs and digital branding solutions</h2>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Link to="/Designo/about">
              <Button text="LEARN MORE" clName="button-hero" />
            </Link>
          </div>
        ) : (
          <>
            <h2>Award-winning custom designs and digital branding solutions</h2>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Link to="/Designo/about">
              <Button text="LEARN MORE" clName="button-hero" />
            </Link>
          </>
        )}
        <img className="hero-phone" src={phone} alt="phone" />
        <div className="hero-oval"></div>
      </div>
    </div>
  );
};
