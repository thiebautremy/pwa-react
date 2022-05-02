import React from "react";
import "./videosContainer.css";
import Video from "../Video/video";
import poster1 from "../../assets/posters/1.png";
import poster2 from "../../assets/posters/2.png";
import poster3 from "../../assets/posters/3.png";
import poster4 from "../../assets/posters/4.png";
import poster5 from "../../assets/posters/5.png";
import poster6 from "../../assets/posters/6.png";
import poster7 from "../../assets/posters/7.png";
import poster8 from "../../assets/posters/8.png";
import poster9 from "../../assets/posters/9.png";
import poster10 from "../../assets/posters/10.png";
import poster11 from "../../assets/posters/11.png";
import poster12 from "../../assets/posters/12.png";
// import first from "../../assets/videos/1.mp4";
// import second from "../../assets/videos/2.mp4";
import Divider from "../Divider/divider";
const VideosContainer = () => {
  return (
    <main className="videosContainer">
      <Video
        index={1}
        title={"Lénger Schoul - Linger"}
        poster={poster1}
        source={"file:///storage/emulated/0/Movies/1.mp4"}
      />
      <Video
        index={2}
        title={"Wagon Fond-de-Gras - Fond-de-Gras"}
        poster={poster2}
        source={"file://storage/emulated/0/Movies/1.mp4"}
      />
      <Video
        index={3}
        title={"La Sauvage - Lasauvage"}
        poster={poster3}
        source={"file:/storage/emulated/0/Movies/1.mp4"}
      />
      <Video
        index={4}
        title={"Gîte Bieles, Réideng - Belvaux"}
        poster={poster4}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={5}
        title={"Pump It Up! - Esch-sur-Alzette"}
        poster={poster5}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={6}
        title={"Waasserbaséng -Schifflange"}
        poster={poster6}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={7}
        title={"Biergemer Kabaisercher - Bergem"}
        poster={poster7}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={8}
        title={"Parc Merveilleux, Renert -Bettembourg"}
        poster={poster8}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={9}
        title={"Aalen Arbed's Büro - Tétange"}
        poster={poster9}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={10}
        title={"Gonner Haus - Rumelange"}
        poster={poster10}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={11}
        title={"Floater - Dudelange"}
        poster={poster11}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Video
        index={12}
        title={"Interviews des porteurs du projet"}
        poster={poster12}
        source={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
      <Divider />
    </main>
  );
};

export default VideosContainer;
