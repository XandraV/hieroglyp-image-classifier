import React, { ButtonHTMLAttributes, FC } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components/macro";
type UploadButtonProps = ButtonHTMLAttributes<{}>;

const StyledUploadButton = styled.div`
margin-left: 1em;
    display: inline
`;
const UploadButton: FC<UploadButtonProps> = ({ ...props }) => (
  <StyledUploadButton>
    <input style={{display: 'none'}} onChange={props.onChange} accept="image/*" id="contained-button-file" multiple type="file" />
    <label htmlFor="contained-button-file">
      <Button {...props} variant="contained" color="secondary" component="span">
        Upload
      </Button>
    </label>
  </StyledUploadButton>
);
export default UploadButton;