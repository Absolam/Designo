import { HeroProjects } from "../../Components/HeroProjects";
import { ProjectCard } from "../../Components/ProjectCard";
import { HomeProjectCards } from "../../Components/HomeProjectCard";
import { GetInTouchModal } from "../../Components/GetInTouchModal";
import { HomeFooter } from "../../Components/HomeFooter";
import expressImg from "../../assets/web-design/desktop/image-express.jpg";
import transferImg from "../../assets/web-design/desktop/image-transfer.jpg";
import photonImg from "../../assets/web-design/desktop/image-photon.jpg";
import builderImg from "../../assets/web-design/desktop/image-builder.jpg";
import blogrImg from "../../assets/web-design/desktop/image-blogr.jpg";
import campImg from "../../assets/web-design/desktop/image-camp.jpg";
import { MenuModal } from "../../Components/MenuModal";
import { useEffect } from "react";

export const WebDesign = ({ menuModal, setMenuModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Designo | Web Design";
    setMenuModal(false);
  }, []);
  return (
    <div>
      {menuModal && <MenuModal />}
      <div className="web-design-page">
        <HeroProjects
          header="Web Design"
          body="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        />
        <ProjectCard
          img={expressImg}
          header="EXPRESS"
          body="A multi-carrier shipping website for ecommerce businesses"
        />
        <ProjectCard
          img={transferImg}
          header="TRANSFER"
          body="Site for low-cost money transfers and sending money within seconds"
        />
        <ProjectCard
          img={photonImg}
          header="PHOTON"
          body="A state-of-the-art music player with high-resolution audio and DSP effects"
        />
        <ProjectCard
          img={builderImg}
          header="BUILDER"
          body="Connects users with local contractors based on their location"
        />
        <ProjectCard
          img={blogrImg}
          header="BLOGR"
          body="Blogr is a platform for creating an online blog or publication"
        />
        <ProjectCard
          img={campImg}
          header="CAMP"
          body="Get expert training in coding, data, design, and digital marketing"
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
        <GetInTouchModal />
      </div>
      <HomeFooter />
    </div>
  );
};
