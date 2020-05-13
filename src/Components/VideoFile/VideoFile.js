import React from "react";
import { Col } from "react-bootstrap";
import { Player } from "video-react";
// import { VideoConsumer } from "../../Context";
const VideoFile = () => {
  return (
    <Col xs={12} md={6}>
      <Player
        playsInline
        src="https://static.videezy.com/system/resources/previews/000/006/801/original/leafs_and_drops_03.mp4"
      />
    </Col>
  );
};

export default VideoFile;
