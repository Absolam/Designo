import { Button } from "./Button";
import { Link } from "react-router-dom";

export const LocationCard = ({ img, clName, circle, header }) => {
  return (
    <div className="desc-card-container">
      <div>
        <img className="desc-card-img" src={img} alt="" />
        <img className={clName} src={circle} alt="" />
      </div>
      <h3>{header}</h3>
      <Link to="/Designo/locations">
        <Button text="SEE LOCATION" clName="about-button" />
      </Link>
    </div>
  );
};
