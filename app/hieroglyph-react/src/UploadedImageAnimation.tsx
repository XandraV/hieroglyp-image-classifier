import React, { FC } from "react";
import unknownhieroglyph from "./unknownhieroglyph.png";
import Grow from "@material-ui/core/Grow";

type UploadedImageAnimation = {
  checked: boolean;
  glyphSrc: any;
};

const UploadedImageAnimation: FC<UploadedImageAnimation> = ({ ...props }) => (
  <div>
    <Grow
      in={props.checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(props.checked ? { timeout: 1000 } : {})}
    >
      <div>
        <img src={props.glyphSrc} alt="uploadedGlyph" />
      </div>
    </Grow>
  </div>
);

export default UploadedImageAnimation;
