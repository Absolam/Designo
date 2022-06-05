export const ProjectCard = ({ img, header, body }) => {
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <div className="project-card-text">
        <h3>{header}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};
