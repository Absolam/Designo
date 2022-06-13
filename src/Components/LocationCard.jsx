import { Button } from "./Button";
import { Link } from "react-router-dom";

export const LocationCard = ({ img, clName, clName2, circle, header }) => {
  return (
    <div className={`${clName2} desc-card-container`}>
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
