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
            Choisissez le numéro de vidéos correspondant au numéro du site que
            vous souhaitez voir.
          </p>
          <p className="videosInfos">
            Choose the video number corresponding to the number of the site you
            want to see.
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
                width="100%"
                height="100%"
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
