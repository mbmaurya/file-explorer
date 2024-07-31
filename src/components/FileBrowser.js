import React, { useEffect } from "react";
import data from "../assets/file.json";
import FilesAndFolders from "./FilesAndFolders";
import { Col, Container, Row, Table } from "react-bootstrap";

function FileBrowser() {
  const list = data.list;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table>
              <thead>
                <th>
                  <div className="table-title">
                    <span>File</span>
                    <span>Download</span>
                  </div>
                </th>
              </thead>
              <tbody>
                {list.map((items) => {
                  return <FilesAndFolders path={items.fullPath} />;
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FileBrowser;
