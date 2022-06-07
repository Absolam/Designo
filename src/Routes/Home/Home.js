import { Hero } from "../../Components/Hero";
import { HomeSections } from "../../Components/HomeSections";
import { HomeFooter } from "../../Components/HomeFooter";
import { MenuModal } from "../../Components/MenuModal";
import { useEffect } from "react";

export const Home = ({ menuModal, setMenuModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Designo | Home";
    setMenuModal(false);
  }, []);
  return (
    <div className="home-container">
      {menuModal && <MenuModal />}
      <Hero />
      <HomeSections />
      <HomeFooter />
    </div>
  );
};
