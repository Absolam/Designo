import { HeroProjects } from "../../Components/HeroProjects";
import { ProjectCard } from "../../Components/ProjectCard";
import expressImg from "../../assets/web-design/desktop/image-express.jpg";
import transferImg from "../../assets/web-design/desktop/image-transfer.jpg";
import photonImg from "../../assets/web-design/desktop/image-photon.jpg";
import builderImg from "../../assets/web-design/desktop/image-builder.jpg";
import blogrImg from "../../assets/web-design/desktop/image-blogr.jpg";
import campImg from "../../assets/web-design/desktop/image-camp.jpg";

export const WebDesign = () => {
  return (
    <div className="web-design-page">
      <HeroProjects />
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
    </div>
  );
};
