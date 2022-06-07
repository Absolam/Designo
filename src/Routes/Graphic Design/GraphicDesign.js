import { HeroProjects } from "../../Components/HeroProjects";
import { ProjectCard } from "../../Components/ProjectCard";
import { HomeProjectCards } from "../../Components/HomeProjectCard";
import { GetInTouchModal } from "../../Components/GetInTouchModal";
import { HomeFooter } from "../../Components/HomeFooter";
import changeImg from "../../assets/graphic-design/desktop/image-change.jpg";
import boxedImg from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import scienceImg from "../../assets/graphic-design/desktop/image-science.jpg";
import { useEffect } from "react";
import { MenuModal } from "../../Components/MenuModal";

export const GraphicDesign = ({ menuModal, setMenuModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Designo | Graphic Design";
    setMenuModal(false);
  }, []);
  return (
    <div>
      {menuModal && <MenuModal />}
      <div className="web-design-page">
        <HeroProjects
          header="Graphic Desgin"
          body="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        />
        <ProjectCard
          img={changeImg}
          header="TIM BROWN"
          body="A book cover designed for 
          Tim Brown’s new release, ‘Change’"
        />
        <ProjectCard
          img={boxedImg}
          header="BOXED WATER"
          body="A simple packaging concept made for Boxed Water"
        />
        <ProjectCard
          img={scienceImg}
          header="SCIENCE!"
          body="A poster made in collaboration with the Federal Art Project"
        />

        <HomeProjectCards
          header="App Design"
          clName="project-cards project-card-app"
          link="/app-design"
        />
        <HomeProjectCards
          header="Web Design"
          clName="project-cards project-card-web"
          link="/web-design"
        />
        <GetInTouchModal />
      </div>
      <HomeFooter />
    </div>
  );
};
