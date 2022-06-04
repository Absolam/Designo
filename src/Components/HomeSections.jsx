import { HomeProjectCards } from "./HomeProjectCard";

export const HomeSections = () => {
  return (
    <div className="home-sections">
      <HomeProjectCards
        header="Web Desgin"
        clName="project-cards project-card-web"
        link="/web-design"
      />
      <HomeProjectCards
        header="App Desgin"
        clName="project-cards project-card-app"
        link="/app-design"
      />
      <HomeProjectCards
        header="Graphic Desgin"
        clName="project-cards project-card-graphic"
        link="/graphic-design"
      />
    </div>
  );
};
