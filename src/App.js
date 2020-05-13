import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoPlayer from "./Components/VideoPlayer";
import { VideoProvider } from "./Context";
import "../node_modules/video-react/dist/video-react.css";
function App() {
  return (
    <VideoProvider>
      <VideoPlayer />
    </VideoProvider>
  );
}

export default App;
