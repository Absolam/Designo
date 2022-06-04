export const HomeProjectCards = ({ clName, header, link }) => {
  return (
    <div className="project-cards-container">
      <div className="overlay"></div>
      <div className="project-cards-text">
        <h3>{header}</h3>
        <p>View Projects</p>
      </div>
      <div className={clName}></div>
    </div>
  );
};
