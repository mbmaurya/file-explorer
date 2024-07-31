import React, { useEffect, useId, useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { FaFolder, FaImage } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import Popup from "./Popup";

function FilesAndFolders({ path }) {
  const imageExtensions = ["png", "jpg"];
  const docExtensions = ["pdf"];

  const [show, setShow] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePopup = (fileName) => {
    setFileName(fileName);
    setShow(true);
  };

  let pathSnippets = path.split("/");
  const InjectedContent = <></>;

  function checkFileType(item) {
    let itemExtention = item.split(".").pop();
    if (imageExtensions.includes(itemExtention)) {
      return "image";
    } else {
      return "document";
    }
  }

  let fileExplorer = pathSnippets
    .reverse()
    .reduce((acc, item, currentIndex) => {
      let itemType = checkFileType(item);
      if (pathSnippets.length <= 1) {
        return (
          <div className="file">
            <p>
              {itemType === "image" ? <FaImage /> : <IoDocument />} {item}
            </p>
            <Button variant="secondary" onClick={() => handlePopup(item)}>
              Download
            </Button>
          </div>
        );
      } else {
        if (currentIndex !== 0) {
          return (
            <Accordion defaultActiveKey="0" ind={currentIndex}>
              <Accordion.Item>
                <Accordion.Header>
                  <FaFolder /> {item}
                </Accordion.Header>
                <Accordion.Body>{acc}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        } else {
          return (
            <div className="file">
              <p>
                {itemType === "image" ? <FaImage /> : <IoDocument />} {item}
              </p>
              <Button variant="secondary" onClick={() => handlePopup(item)}>
                Download
              </Button>
            </div>
          );
        }
      }
    }, InjectedContent);

  return (
    <>
      <tr>
        <td>
          <div className="accordion-container">{fileExplorer}</div>
        </td>
      </tr>

      {show ? (
        <Popup handleClose={handleClose} show={show} fileName={fileName} />
      ) : (
        ""
      )}
    </>
  );
}

export default FilesAndFolders;
