import { HomeProjectCards } from "./HomeProjectCard";

export const HomeSections = () => {
  return (
    <div className="home-sections">
      <HomeProjectCards
        header="Web Desgin"
        clName="project-cards project-card-web"
      />
      <HomeProjectCards
        header="App Desgin"
        clName="project-cards project-card-app"
      />
      <HomeProjectCards
        header="Graphic Desgin"
        clName="project-cards project-card-graphic"
      />
    </div>
  );
};
