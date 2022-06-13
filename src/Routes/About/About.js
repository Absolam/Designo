import { HeroProjects } from "../../Components/HeroProjects";
import aboutHero from "../../assets/about/mobile/image-about-hero.jpg";
import aboutHeroDesktop from "../../assets/about/desktop/image-about-hero.jpg";
import aboutWorldClassTalent from "../../assets/about/mobile/image-world-class-talent.jpg";
import aboutWorldClassTalentDesktop from "../../assets/about/desktop/image-world-class-talent.jpg";
import aboutRealDeal from "../../assets/about/mobile/image-real-deal.jpg";
import aboutRealDealDesktop from "../../assets/about/desktop/image-real-deal.jpg";
import { ProjectCard } from "../../Components/ProjectCard";
import { LocationCard } from "../../Components/LocationCard";
import canadaImg from "../../assets/shared/desktop/illustration-canada.svg";
import australiaImg from "../../assets/shared/desktop/illustration-australia.svg";
import unitedKingdomImg from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import { GetInTouchModal } from "../../Components/GetInTouchModal";
import { HomeFooter } from "../../Components/HomeFooter";
import "../About/About.css";
import { useEffect } from "react";
import { MenuModal } from "../../Components/MenuModal";

export const About = ({ menuModal, setMenuModal, width }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Designo | About Us";
    setMenuModal(false);
  }, []);
  return (
    <div className="about">
      {menuModal && <MenuModal />}
      <div className="about-hero-container">
        {width > 900 ? (
          <>
            <HeroProjects
              header="About Us"
              body="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
              clName="hero-about"
              clName2="about-text-align"
            />
            <img
              className="about-hero-img"
              src={width > 900 ? aboutHeroDesktop : aboutHero}
              alt="about-page-hero"
            />
          </>
        ) : (
          <>
            <img
              className="about-hero-img"
              src={aboutHero}
              alt="about-page-hero"
            />
            <HeroProjects
              header="About Us"
              body="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
              clName="hero-about"
            />
          </>
        )}
      </div>
      <div className="about-hero-container project-card-text">
        <img
          className="about-hero-img about-hero-img-reverse"
          src={
            width > 900 ? aboutWorldClassTalentDesktop : aboutWorldClassTalent
          }
          alt="about-page-hero"
        />
        <div className="about-hero-text">
          <h3>World-Class Talent</h3>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
      <div className="about-cards">
        <LocationCard
          clName2="desc-card-locations"
          header="CANADA"
          img={canadaImg}
        />
        <LocationCard
          clName2="desc-card-locations"
          header="AUSTRALIA"
          img={australiaImg}
        />
        <LocationCard
          clName2="desc-card-locations"
          header="UNITED KINGDOM"
          img={unitedKingdomImg}
        />
      </div>
      <div className="about-hero-container project-card-text about-modal-attach">
        {width > 900 ? (
          <>
            <div className="about-hero-text">
              <h3>The Real Deal</h3>
              <p>
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p>
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
            <img
              className="about-hero-img"
              src={width > 900 ? aboutRealDealDesktop : aboutRealDeal}
              alt="about-page-hero"
            />
          </>
        ) : (
          <>
            <img
              className="about-hero-img"
              src={width > 900 ? aboutRealDealDesktop : aboutRealDeal}
              alt="about-page-hero"
            />
            <div className="about-hero-text">
              <h3>The Real Deal</h3>
              <p>
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p>
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </>
        )}
        <GetInTouchModal />
      </div>
      <HomeFooter />
    </div>
  );
};
