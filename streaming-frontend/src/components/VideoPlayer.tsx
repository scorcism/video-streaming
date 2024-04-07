import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ video }: { video: string }) => {
  return (
    <React.Fragment>
      <div className="w-4/5 flex-3 sticky top-0 overflow-hidden">
        <ReactPlayer url={video} playing={true} controls={true} width="100%" height="100%"/>
      </div>
    </React.Fragment>
  );
};

export default VideoPlayer;
