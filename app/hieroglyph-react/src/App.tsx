import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import HieroglyphPage from "./HieroglyphPage";

const App: FC = () => {
  return (
      <Router>
        <Route exact path="/">
          <Header title={"Hieroglyphs"} />
          <HieroglyphPage />
        </Route>
      </Router>
  );
};

export default App;
