import arrow from "../assets/shared/desktop/icon-right-arrow.svg";
import webDesktop from "../assets/home/desktop/image-web-design-large.jpg";
import appDesktop from "../assets/home/desktop/image-app-design.jpg";
import graphicDesktop from "../assets/home/desktop/image-graphic-design.jpg";
import webTablet from "../assets/home/tablet/image-web-design.jpg";
import appTablet from "../assets/home/tablet/image-app-design.jpg";
import graphicTablet from "../assets/home/tablet/image-graphic-design.jpg";
import webMobile from "../assets/home/mobile/image-web-design.jpg";
import appMobile from "../assets/home/mobile/image-app-design.jpg";
import graphicMobile from "../assets/home/mobile/image-graphic-design.jpg";
import { Link } from "react-router-dom";

export const HomeProjectCards = ({ clName, clName2, header, link, width }) => {
  function chooseImg(header) {
    if (header === "Web Design") {
      if (width > 900) {
        return webDesktop;
      } else if (width > 600) {
        return webTablet;
      } else return webMobile;
    } else if (header === "App Design") {
      if (width > 900) {
        return appDesktop;
      } else if (width > 600) {
        return appTablet;
      } else return appMobile;
    } else if (header === "Graphic Design") {
      if (width > 900) {
        return graphicDesktop;
      } else if (width > 600) {
        return graphicTablet;
      } else return graphicMobile;
    }
  }

  return (
    <div className={`project-card-container ${clName2}`}>
      <div className="overlay"></div>
      <div className="project-cards-text">
        <h3>{header}</h3>
        <Link to={`/Designo${link}`} className="project-cards-link-container">
          <p>View Projects</p>
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
      <img src={chooseImg(header)} className={clName}></img>
    </div>
  );
};
