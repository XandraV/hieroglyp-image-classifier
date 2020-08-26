import React, { useState, FC } from "react";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PageWrapper from "./PageWrapper";
import UploadButton from "./UploadButton";
import UploadedImageAnimation from "./UploadedImageAnimation";
import { makeStyles } from "@material-ui/core/styles";
import hieroglyphData from "./data";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3, 0, 0),
  },
  cardGrid: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  cardsContainer: {
    justifyContent: "center",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    color: "black",
  },
}));
const MayanGlyphPage: FC = () => {
  const classes = useStyles();
  const [pred, setPred] = useState("");
  const [imageToUpload, setImageToUpload] = useState("");
  const [imageURL, setImageURL] = useState("");

  const data = new FormData();
  data.append("file", imageToUpload);

  const onChange = (e: any) => {
    setImageToUpload(e.target.files[0]);
    setImageURL(URL.createObjectURL(e.target.files[0]));
  };
  function handleClick() {
    fetch(`http://localhost:5000/predict0`, {
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
    <PageWrapper pageName="maya">
      <Container className={classes.cardGrid}>
        <Grid
          className={classes.cardsContainer}
          container
          justify="center"
          spacing={4}
        >
          <Grid item key={1} xs={8}>
            <Card className={classes.card}>
              <UploadedImageAnimation
                glyphSrc={imageURL}
                checked={imageToUpload === "" ? false : true}
              />
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
        </Grid>
      </Container>
      <Button onClick={handleClick} variant="contained" color="primary">
        predict
      </Button>
      <UploadButton onChange={onChange} />
    </PageWrapper>
  );
};

export default MayanGlyphPage;
