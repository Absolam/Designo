import { Hero } from "../../Components/Hero";
import { HomeSections } from "../../Components/HomeSections";
import { HomeFooter } from "../../Components/HomeFooter";
import { MenuModal } from "../../Components/MenuModal";
import { useEffect } from "react";

export const Home = ({ menuModal, setMenuModal, width }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Designo | Home";
    setMenuModal(false);
  }, []);
  return (
    <div className="home-container">
      {menuModal && <MenuModal />}
      <Hero width={width} />
      <HomeSections width={width} />
      <HomeFooter width={width} />
    </div>
  );
};
