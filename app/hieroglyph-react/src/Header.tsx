import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
type Header = {
  title?: string;
};

const Header: FC<Header> = ({ title }) => (
  <AppBar position="relative" style={{backgroundColor:"#e0bb6e"}}>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
