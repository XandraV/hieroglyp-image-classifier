import React, { useState, FC } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { DropzoneArea } from "material-ui-dropzone";
import PageWrapper from "./PageWrapper";
import { makeStyles } from "@material-ui/core/styles";
import hieroglyphData from "./data";
import Alphabet from "./Alphabet";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    background: "transparent",
    color: "white",
  },
  dropzone: {
    "& .MuiDropzonePreviewList-root": {
      justifyContent: "center",
    },
    "& 	.MuiDropzoneArea-icon": {
      color: "white",
    },
    "& .MuiDropzoneArea-text": {
      fontSize: 15,
      color: "white",
    },
    marginBottom: "1em",
    borderColor: "white",
    background: "transparent",
    minHeight: "350px",
  },
}));

const HieroglyphPage: FC = () => {
  const classes = useStyles();
  const [pred, setPred] = useState("");
  const [files, setFiles] = useState([]);

  const data = new FormData();
  data.append("file", files[0]);

  const onChange = (e: any) => {
    setFiles(e);
  };

  const onDelete = () => {
    setPred("");
  };

  function handleClick() {
    fetch(`http://localhost:5000/prediction`, {
      method: "POST",
      body: data,
    })
      .then((response) =>
        response.json().then((data) => {
          setPred(data.prediction);
        })
      )
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }

  return (
    <PageWrapper>
      <Row>
        <Col >
          <h3>Egyptian Hieroglyphs</h3>
          <div className="pb-3">
            Egyptian hieroglyphs were the formal writing system used in Ancient
            Egypt. Hieroglyphs combined logographic, syllabic and alphabetic
            elements, with a total of some 1,000 distinct characters.
          </div>
          <Alphabet />
        </Col>
        <Col>
          <DropzoneArea
            dropzoneClass={classes.dropzone}
            dropzoneText={"Drag and drop an image here or click to upload"}
            filesLimit={1}
            maxFileSize={100000000}
            onChange={onChange}
            onDelete={onDelete}
            showAlerts={false}
          />
          <Card className={classes.card}>
            {(hieroglyphData as any)[pred] && (
              <CardContent>
                Prediction: {pred}
                <div>meaning: {(hieroglyphData as any)[pred].meaning}</div>
                <div>logogram: {(hieroglyphData as any)[pred].logogram}</div>
              </CardContent>
            )}
          </Card>

          {!pred && (
            <Button variant="outline-light" size="sm" onClick={handleClick}>
              IDENTIFY
            </Button>
          )}
        </Col>
      </Row>
    </PageWrapper>
  );
};
export default HieroglyphPage;
