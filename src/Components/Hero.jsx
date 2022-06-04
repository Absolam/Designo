import "../Routes/Home/Home.css";
import phone from "../assets/home/desktop/image-hero-phone.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>Award-winning custom designs and digital branding solutions</h2>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
      </div>
      <img className="hero-phone" src={phone} alt="phone" />
      <div className="hero-oval"></div>
    </div>
  );
};
