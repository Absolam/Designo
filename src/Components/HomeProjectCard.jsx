import arrow from "../assets/shared/desktop/icon-right-arrow.svg";

export const HomeProjectCards = ({ clName, header, link }) => {
  return (
    <div className="project-cards-container">
      <div className="overlay"></div>
      <div className="project-cards-text">
        <h3>{header}</h3>
        <div className="project-cards-link-container">
          <p>View Projects</p>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className={clName}></div>
    </div>
  );
};
