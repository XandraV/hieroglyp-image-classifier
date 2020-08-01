import React, { useState, FC } from "react";
import { Button } from "@material-ui/core";
import PageWrapper from "./PageWrapper";
import UploadButton from "./UploadButton";
import UploadedImageAnimation from "./UploadedImageAnimation";

const MayanGlyphPage: FC = () => {
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
      <UploadedImageAnimation
        glyphSrc={imageURL}
        checked={imageToUpload === "" ? false : true}
      />
      <Button onClick={handleClick} variant="contained" color="primary">
        predict
      </Button>
      <UploadButton onChange={onChange} />
      <div>Prediction: {pred}</div>
    </PageWrapper>
  );
};

export default MayanGlyphPage;
