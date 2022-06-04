import menuIcon from "../assets/shared/mobile/icon-hamburger.svg";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-logo-name">
        <div className="oval" />
        <h1>DESIGNO</h1>
      </div>
      <img src={menuIcon} alt="" />
    </div>
  );
};
