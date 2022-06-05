import { HomeProjectCards } from "./HomeProjectCard";
import { HomeDescCards } from "./HomeDescCards";
import passionateImg from "../assets/home/desktop/illustration-passionate.svg";
import resourcefulImg from "../assets/home/desktop/illustration-resourceful.svg";
import friendlyImg from "../assets/home/desktop/illustration-friendly.svg";
import { GetInTouchModal } from "./GetInTouchModal";

export const HomeSections = () => {
  return (
    <div className="home-sections">
      <div className="project-cards-container">
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
      <div className="desc-cards-container">
        <HomeDescCards
          img={passionateImg}
          header="Passionate"
          body="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          clName="desc-card-circle rotate-right"
        />
        <HomeDescCards
          img={resourcefulImg}
          header="Resourceful"
          body="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          clName="desc-card-circle rotate-up"
        />
        <HomeDescCards
          img={friendlyImg}
          header="Friendly"
          body=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          clName="desc-card-circle rotate-down"
        />
      </div>
      <GetInTouchModal />
    </div>
  );
};
