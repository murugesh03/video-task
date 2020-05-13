import React from "react";
import "./VideoPlayer.css";
import TableView from "./Table/TableView";
import { Container, Row } from "react-bootstrap";
import VideoFile from "./VideoFile/VideoFile";
const VideoPlayer = () => {
  return (
    <div>
      <h3>Video Player</h3>
      <Container>
        <Row>
          <TableView />
          <VideoFile />
        </Row>
      </Container>
    </div>
  );
};

export default VideoPlayer;
