import "../Routes/Web Design/WebDesign.css";

export const HeroProjects = ({ header, body }) => {
  return (
    <div className="hero-projects">
      <div className="hero-projects-text">
        <h2>{header}</h2>
        <p>{body}</p>
        <div className="hero-projects-oval"></div>
      </div>
    </div>
  );
};
