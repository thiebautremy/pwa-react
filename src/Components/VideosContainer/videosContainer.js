import React from "react";
import "./videosContainer.css";
import Video from "../Video/video";
import E22 from "../../assets/logos/E22.png";
import first from "../../assets/videos/1.mp4";
import second from "../../assets/videos/2.mp4";
import Divider from "../Divider/divider";
const VideosContainer = () => {
  return (
    <main className="videosContainer">
      <Video
        index={1}
        title={"Lénger Schoul - Linger"}
        poster={E22}
        source={first}
      />
      <Video
        index={2}
        title={"Wagon Fond-de-Gras - Fond-de-Gras"}
        poster={E22}
        source={second}
      />
      <Video
        index={3}
        title={"La Sauvage - Lasauvage"}
        poster={E22}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={4}
        title={"Gîte Bieles, Réideng - Belvaux"}
        poster={E22}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={5}
        title={"Pump It Up! - Esch-sur-Alzette"}
        poster={E22}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={6}
        title={"Waasserbaséng -Schifflange"}
        poster={E22}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={7}
        title={"Biergemer Kabaisercher - Bergem"}
        poster={E22}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={8}
        title={"Parc Merveilleux, Renert -Bettembourg"}
        poster={E22}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={9}
        title={"Aalen Arbed's Büro - Tétange"}
        poster={E22}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={10}
        title={"Gonner Haus - Rumelange"}
        poster={E22}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={11}
        title={"Floater - Dudelange"}
        poster={E22}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={12}
        title={"Interviews des porteurs du projet"}
        poster={E22}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Divider />
    </main>
  );
};

export default VideosContainer;
