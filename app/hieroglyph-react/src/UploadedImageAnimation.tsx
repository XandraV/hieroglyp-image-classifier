import React, { FC } from "react";
import Card from "@material-ui/core/Card";
import Grow from "@material-ui/core/Grow";
import styled from "styled-components/macro";

type UploadedImageAnimation = {
  checked: boolean;
  glyphSrc: any;
};

const StyledImage = styled.img`
  min-width: 20em;
  min-height: 20em;
  max-width: 20em;
  max-height: 20em;
`;

const CardWrapper = styled.div`
  display: contents;
  max-width: 20em;
  max-height: 20em;
`;

const UploadedImageAnimation: FC<UploadedImageAnimation> = ({ ...props }) => (
  <div>
    <Grow
      in={props.checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(props.checked ? { timeout: 1000 } : {})}
    >
      <CardWrapper>
        <Card>
          <StyledImage src={props.glyphSrc} alt="uploadedGlyph" />
        </Card>
      </CardWrapper>
    </Grow>
  </div>
);

export default UploadedImageAnimation;
