import React, { ButtonHTMLAttributes, FC } from "react";
import Button from "@material-ui/core/Button";

type UploadButtonProps = ButtonHTMLAttributes<{}>;

const UploadButton: FC<UploadButtonProps> = ({ ...props }) => (
  <div>
    <input style={{display: 'none'}} onChange={props.onChange} accept="image/*" id="contained-button-file" multiple type="file" />
    <label htmlFor="contained-button-file">
      <Button {...props} variant="contained" color="secondary" component="span">
        Upload
      </Button>
    </label>
  </div>
);
export default UploadButton;