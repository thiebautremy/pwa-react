import React, { useState } from "react";
import "./videosContainer.css";
import ReactPlayer from "react-player";
import Fade from "react-reveal/Fade";
const VideosContainer = () => {
  const [videoFilePath, setVideoFilePath] = useState(null);

  const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <main className="videosContainer">
      <Fade bottom>
        <>
          <p className="videosInfos">
            Choisissez le numéro de la vidéo correspondant au numéro sur le plan
            du Minett Trail du « Kabaisercher » que vous souhaitez voir, ou
            encore les interviews des porteurs du projet et le point de vue de
            l’OAI sur le contexte du projet.
          </p>
          <p className="videosInfos">
            Choose the video number corresponding to the number on the map of
            the Minett Trail of the « Kabaisercher » you want to see, or
            interviews of the project partners and the point of view of the OAI
            on the context of the project.
          </p>
          <div className="videosContainer__input">
            <label htmlFor="file" className="label-file">
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
          {videoFilePath !== null && (
            <div className="videosContainer__video">
              <ReactPlayer
                url={videoFilePath}
                width="auto"
                height="20rem"
                controls={true}
              />
            </div>
          )}
        </>
      </Fade>
    </main>
  );
};

export default VideosContainer;
