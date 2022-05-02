import React, { useState } from "react";
import "./header.css";
import Divider from "../Divider/divider";
import logo_minettTrail from "../../assets/logos/MinettTrail.png";
import logo_oai from "../../assets/logos/oai.png";
import logo_prosud from "../../assets/logos/ProSud.png";
// import Video from "../Video/video";
import ReactPlayer from "react-player";

const Header = () => {
  const [videoFilePath, setVideoFilePath] = useState(null);

  const handleVideoUpload = (event) => {
    console.log(event.target);
    console.log(event.target.files);
    console.log(event.target.files[0]);
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };
  console.log(videoFilePath);
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
          className="logo logo_oai"
          alt="Logo OAI"
          src={logo_oai}
          title="Logo OAI"
        />
        <img
          className="logo logo_proSud"
          alt="Logo ProSud"
          src={logo_prosud}
          title="Logo ProSud"
        />
      </div>
      <input
        className="butOpenFile"
        type="file"
        accept="video/*"
        onCanPlay={(e) => console.log(e)}
        on
        onChange={handleVideoUpload}
      />
      {videoFilePath !== null && (
        <div>
          {videoFilePath}
          <ReactPlayer
            url={videoFilePath}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      )}
      {/* <Video index={8} title={"Test"} poster={""} source={{ uri: videoSrc }} /> */}
    </header>
  );
};

export default Header;
