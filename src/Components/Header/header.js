import React from "react";
import "./header.css";
import Divider from "../Divider/divider";
import logo_minettTrail from "../../assets/logos/MinettTrail.png";
import logo_oai from "../../assets/logos/oai.png";
import logo_prosud from "../../assets/logos/ProSud.png";

const Header = () => {
  return (
    <header className="header">
      <h1>Walk on the Minett trail</h1>
      <h2>Découvrez les 11 Kabaisercher en vidéo !</h2>
      <Divider />
      <div className="header__logos">
        <img
          className="logo logo_minettTrail"
          alt="Logo Minett Trail"
          src={logo_minettTrail}
          title="Logo Minett Trail"
        />
        <img
          className="logo logo_proSud"
          alt="Logo ProSud"
          src={logo_prosud}
          title="Logo ProSud"
        />
        <img
          className="logo logo_oai"
          alt="Logo OAI"
          src={logo_oai}
          title="Logo OAI"
        />
      </div>
    </header>
  );
};

export default Header;
