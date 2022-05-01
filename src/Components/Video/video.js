import React from "react";
import "./video.css";
import { Player } from "video-react";

const Video = (props) => {
  return (
    <div className="video">
      <h3>
        <span className="indexHouse">{props.index}</span> {props.title}
      </h3>
      <Player poster={props.poster} src={props.source} />
    </div>
  );
};

export default Video;
