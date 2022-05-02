import React, { useState } from "react";
import "./videosContainer.css";
// import Video from "../Video/video";
// import poster1 from "../../assets/posters/1.png";
// import poster2 from "../../assets/posters/2.png";
// import poster3 from "../../assets/posters/3.png";
// import poster4 from "../../assets/posters/4.png";
// import poster5 from "../../assets/posters/5.png";
// import poster6 from "../../assets/posters/6.png";
// import poster7 from "../../assets/posters/7.png";
// import poster8 from "../../assets/posters/8.png";
// import poster9 from "../../assets/posters/9.png";
// import poster10 from "../../assets/posters/10.png";
// import poster11 from "../../assets/posters/11.png";
// import poster12 from "../../assets/posters/12.png";
import ReactPlayer from "react-player";
// import first from "../../assets/videos/1.mp4";
// import second from "../../assets/videos/2.mp4";
import Divider from "../Divider/divider";
const VideosContainer = () => {
  const [videoFilePathFirst, setVideoFilePathFirst] = useState(null);
  const [videoFilePathSecond, setVideoFilePathSecond] = useState(null);
  const [videoFilePathThird, setVideoFilePathThird] = useState(null);
  // const [videoFilePathFourth, setVideoFilePathFourth] = useState(null);
  // const [videoFilePathFifth, setVideoFilePathFifth] = useState(null);
  // const [videoFilePathSixth, setVideoFilePathSixth] = useState(null);

  const handleVideoUpload = (event) => {
    console.log(event.target.files[0]);
    if (event.target.files[0].name === "1.mp4") {
      setVideoFilePathFirst(URL.createObjectURL(event.target.files[0]));
    }
    if (event.target.files[0].name === "2.mp4") {
      setVideoFilePathSecond(URL.createObjectURL(event.target.files[0]));
    }
    if (event.target.files[0].name === "3.mp4") {
      setVideoFilePathThird(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <main className="videosContainer">
      <Divider />
      <div className="videosContainer__input">
        <label for="file" class="label-file">
          Choisir une vidéo
        </label>
        <input
          id="file"
          className="butOpenFile"
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
        />
      </div>
      {videoFilePathFirst !== null && (
        <div className="videosContainer__video">
          <ReactPlayer
            url={videoFilePathFirst}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      )}
      {videoFilePathSecond !== null && (
        <div className="videosContainer__video">
          <ReactPlayer
            url={videoFilePathSecond}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      )}
      {videoFilePathThird !== null && (
        <div className="videosContainer__video">
          <ReactPlayer
            url={videoFilePathThird}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      )}
      {/* <Video
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
      /> */}
    </main>
  );
};

export default VideosContainer;
