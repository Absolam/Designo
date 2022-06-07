import arrow from "../assets/shared/desktop/icon-right-arrow.svg";
import { Link } from "react-router-dom";

export const HomeProjectCards = ({ clName, header, link }) => {
  return (
    <div className="project-card-container">
      <div className="overlay"></div>
      <div className="project-cards-text">
        <h3>{header}</h3>
        <Link to={`/Designo${link}`} className="project-cards-link-container">
          <p>View Projects</p>
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
      <div className={clName}></div>
    </div>
  );
};
