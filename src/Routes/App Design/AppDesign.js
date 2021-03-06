import { HeroProjects } from "../../Components/HeroProjects";
import { ProjectCard } from "../../Components/ProjectCard";
import { HomeProjectCards } from "../../Components/HomeProjectCard";
import { GetInTouchModal } from "../../Components/GetInTouchModal";
import { HomeFooter } from "../../Components/HomeFooter";
import airfilterImg from "../../assets/app-design/desktop/image-airfilter.jpg";
import eyecamImg from "../../assets/app-design/desktop/image-eyecam.jpg";
import faceitImg from "../../assets/app-design/desktop/image-faceit.jpg";
import todoImg from "../../assets/app-design/desktop/image-todo.jpg";
import loopstudiosImg from "../../assets/app-design/desktop/image-loopstudios.jpg";
import { useEffect } from "react";
import { MenuModal } from "../../Components/MenuModal";

export const AppDesign = ({ menuModal, setMenuModal, width }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Designo | App Design";
    setMenuModal(false);
  }, []);
  return (
    <div>
      {menuModal && <MenuModal />}
      <div className="web-design-page">
        <HeroProjects
          header="App Design"
          body="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
          clName="hero-projects"
        />
        <div className="project-cards-grid">
          <ProjectCard
            img={airfilterImg}
            header="AIRFILTER"
            body="Solving the problem of poor indoor air quality by filtering the air"
          />
          <ProjectCard
            img={eyecamImg}
            header="EYECAM"
            body="Product that lets you edit your favorite photos and videos at any time"
          />
          <ProjectCard
            img={faceitImg}
            header="FACEIT"
            body="Get to meet your favorite internet superstar with the faceit app"
          />
          <ProjectCard
            img={todoImg}
            header="TODO"
            body="A todo app that features cloud sync with light and dark mode"
          />
          <ProjectCard
            img={loopstudiosImg}
            header="LOOPSTUDIOS"
            body="A VR experience app made for Loopstudios"
          />
        </div>
        <div className="project-cards-app-container">
          <HomeProjectCards
            header="Web Design"
            clName="project-cards project-card-web"
            link="/web-design"
            clName2="project-card-sizing-fix project-web-design"
            width={width}
          />
          <HomeProjectCards
            header="Graphic Design"
            clName="project-cards project-card-graphic project-card-sizing-fix"
            link="/graphic-design"
            clName2="project-card-sizing-fix project-graphic-design"
            width={width}
          />
        </div>
        <GetInTouchModal />
      </div>
      <HomeFooter />
    </div>
  );
};
