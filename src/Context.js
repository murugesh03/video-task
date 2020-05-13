import React, { createContext, useState, useEffect } from "react";
import Data from "./Data";
const VideoContext = createContext();
const VideoProvider = (props) => {
  const [videoTable, setVideoTable] = useState({
    videoContent: Data,
    videoPlaying: [],
  });

  const handleChecked = (event, videoContent) => {
    console.log("called");
    let videoarr = videoTable.videoPlaying;
    // let videoarr = [];
    let check = event.target.checked;
    // let checkedVideo = event.target.value;
    if (check) {
      // videoarr.push(checkedVideo);
      videoarr.push(videoContent);
      setVideoTable({
        ...videoTable,
        videoPlaying: videoarr,
      });
    }
    console.log(videoarr);
  };

  return (
    <VideoContext.Provider
      value={{ ...videoTable, handleChecked: handleChecked }}
    >
      {props.children}
    </VideoContext.Provider>
  );
};
const VideoConsumer = VideoContext.Consumer;

export { VideoProvider, VideoConsumer };
