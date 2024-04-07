import React from "react";
import videoList from "../lib/videoList.json";

const VideoList = ({ setVideo }: { setVideo: any }) => {
  return (
    <React.Fragment>
      <div className="flex-2 h-screen overflow-y-scroll w-1/5">
        {videoList.videos.map((video) => (
          <VideoListCard
            title={video.title}
            thumbnail={video.thumbnail}
            ed={video.ed}
            url={video.url}
            setVideo={setVideo}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

type VideoListCardPropType = {
  title: string;
  thumbnail: string;
  ed: string;
  url: string;
  setVideo: any;
};
const VideoListCard = ({
  title,
  thumbnail,
  ed,
  url,
  setVideo,
}: VideoListCardPropType) => {
  return (
    <div
      className="mb-2 cursor-pointer"
      title={title}
      onClick={() => setVideo(url)}
    >
      <div className="border-[1px] border-black/50 rounded-md">
        <div className="">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="px-2 flex justify-between my-2">
          <h2>{title}</h2> <span>{ed}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoList;
