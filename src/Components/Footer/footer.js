import React from "react";
import "./footer.css";
import logo_visitMinett from "../../assets/logos/VisitMinett.png";
import logo_MUB from "../../assets/logos/MUB.png";
import E22 from "../../assets/logos/E22.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="header__logos">
        <img
          className="logo logo_visitMinett"
          alt="Logo Visit Minett"
          src={logo_visitMinett}
          title="Logo Visit Minett"
        />
        <img
          className="logo logo_MUB"
          alt="Logo MUB"
          src={logo_MUB}
          title="Logo MUB"
        />
        <img className="logo E22" alt="Logo Esch" src={E22} title="Logo Esch" />
      </div>
    </footer>
  );
};

export default Footer;
