import React from "react";
import TableContent from "./TableContent/TableContent";
import { Col, Button, Table } from "react-bootstrap";
import { VideoConsumer } from "../../Context";

const TableView = (handleChecked) => {
  return (
    <Col xs={12} md={6}>
      <VideoConsumer>
        {(Value) => <Button className="primary-color">Play</Button>}
      </VideoConsumer>

      <Table>
        <TableContent />
      </Table>
    </Col>
  );
};

export default TableView;
