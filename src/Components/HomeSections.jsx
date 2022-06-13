import { HomeProjectCards } from "./HomeProjectCard";
import { HomeDescCards } from "./HomeDescCards";
import passionateImg from "../assets/home/desktop/illustration-passionate.svg";
import resourcefulImg from "../assets/home/desktop/illustration-resourceful.svg";
import friendlyImg from "../assets/home/desktop/illustration-friendly.svg";
import { GetInTouchModal } from "./GetInTouchModal";

export const HomeSections = ({ width }) => {
  return (
    <div className="home-sections">
      <div className="project-cards-container">
        <HomeProjectCards
          header="Web Design"
          clName="project-cards project-card-web"
          link="/web-design"
          clName2="project-web-design"
          width={width}
        />
        <HomeProjectCards
          header="App Design"
          clName="project-cards project-card-app"
          link="/app-design"
          clName2="project-app-design"
          width={width}
        />
        <HomeProjectCards
          header="Graphic Design"
          clName="project-cards project-card-graphic"
          link="/graphic-design"
          clName2="project-graphic-design"
          width={width}
        />
      </div>
      <div className="desc-cards-container">
        <HomeDescCards
          width={width}
          img={passionateImg}
          header="Passionate"
          body="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          clName="desc-card-circle rotate-right"
        />
        <HomeDescCards
          width={width}
          img={resourcefulImg}
          header="Resourceful"
          body="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          clName="desc-card-circle rotate-up"
        />
        <HomeDescCards
          width={width}
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
