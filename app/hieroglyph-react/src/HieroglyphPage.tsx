import React, { useState, FC } from "react";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import { DropzoneArea } from "material-ui-dropzone";
import Grid from "@material-ui/core/Grid";
import PageWrapper from "./PageWrapper";
import styled from "styled-components/macro";
import UploadedImageAnimation from "./UploadedImageAnimation";
import { makeStyles } from "@material-ui/core/styles";
import hieroglyphData from "./data";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: "2em",
    "& .MuiDropzonePreviewList-root": {
      justifyContent: "center",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    color: "black",
    fontFamily: "Segoe UI",
  },
  dropzone: {
    marginBottom: "1em",
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
    <PageWrapper pageName="hieroglyph">
      <Grid
        className={classes.cardGrid}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <DropzoneArea
          dropzoneClass={classes.dropzone}
          dropzoneText={"Drag and drop an image here or click to upload"}
          filesLimit={1}
          maxFileSize={100000000}
          onChange={onChange}
        />
        <Card className={classes.card}>
          {(hieroglyphData as any)[pred] ? (
            <CardContent className={classes.cardContent}>
              Prediction: {pred}
              <div>meaning: {(hieroglyphData as any)[pred].meaning}</div>
              <div>logogram: {(hieroglyphData as any)[pred].logogram}</div>
            </CardContent>
          ) : (
            ""
          )}{" "}
        </Card>
      </Grid>

      <Button onClick={handleClick} variant="contained" color="primary">
        predict
      </Button>
    </PageWrapper>
  );
};
export default HieroglyphPage;
