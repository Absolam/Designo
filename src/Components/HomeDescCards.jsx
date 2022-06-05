import circle from "../assets/home/desktop/bg-pattern-hero-home.svg";

export const HomeDescCards = ({ header, body, img, clName }) => {
  return (
    <div className="desc-card-container">
      <div>
        <img className="desc-card-img" src={img} alt="" />
        <img className={clName} src={circle} alt="" />
      </div>
      <h3>{header}</h3>
      <p>{body}</p>
    </div>
  );
};
