import React from "react";
import "./VideoPlayer.css";
import video from "../../assets/video-doce.mp4";

function VideoPlayer() {
  return (
    <div className="video-player hide">
      <video
        src={video}
        autoPlay
        controls
        muted></video>
    </div>
  );
}

export default VideoPlayer;
