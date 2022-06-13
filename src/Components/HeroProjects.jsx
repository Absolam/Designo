import "../Routes/Web Design/WebDesign.css";

export const HeroProjects = ({ header, body, clName, clName2 }) => {
  return (
    <div className={clName}>
      <div className="hero-projects-text">
        <h2 className={clName2}>{header}</h2>
        <p className={clName2}>{body}</p>
        <div className="hero-projects-oval"></div>
      </div>
    </div>
  );
};
