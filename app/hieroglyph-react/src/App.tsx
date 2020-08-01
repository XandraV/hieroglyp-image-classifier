import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import HieroglyphPage from "./HieroglyphPage";
import MayanGlyphPage from "./MayanGlyphPage";
import Page1 from "./Page1";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { purple, teal, orange } from "@material-ui/core/colors";

const glyphTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: teal,
    text: {
      primary: "rgba(255,255,255)",
      secondary: orange[300],
    },
  },
  typography: {
    fontFamily: "Segoe UI",
  },
});

const App: FC = () => {
  return (
    <MuiThemeProvider theme={glyphTheme}>
      <Router>
        <Route exact path="/">
          <Page1 />
        </Route>
        <Route exact path="/hieroglyph">
          <Header title={"Hieroglyphs"} />
          <HieroglyphPage />
        </Route>
        <Route exact path="/mayan-glyph">
          <Header title={"Mayan Glyphs"} />
          <MayanGlyphPage />
        </Route>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
