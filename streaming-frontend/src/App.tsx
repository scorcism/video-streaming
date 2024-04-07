import React, { useState } from "react";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [video, setVideo] = useState("");

  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <div className="flex">
          <VideoPlayer video={video} />

          <div className="border-r-2 border-black/50 mx-1" />

          <VideoList setVideo={setVideo} />

        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
