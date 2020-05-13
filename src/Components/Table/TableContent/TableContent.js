import React, { Fragment } from "react";
import { VideoConsumer } from "../../../Context";
const TableContent = (props) => {
  return (
    <Fragment>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Title</th>
          <th>Duration</th>
          <th>Check Box</th>
        </tr>
      </thead>
      <tbody>
        <VideoConsumer>
          {(props) => {
            console.log(props);
            return props.videoContent.map((videosData) => {
              return (
                <tr key={videosData.id}>
                  <td>{videosData.id}</td>
                  <td>{videosData.title}</td>
                  <td>{videosData.duration}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={videosData.checked}
                      value={videosData.url}
                      onChange={(e) => props.handleChecked(e, videosData)}
                    />
                  </td>
                </tr>
              );
            });
          }}
        </VideoConsumer>
      </tbody>
    </Fragment>
  );
};

export default TableContent;
