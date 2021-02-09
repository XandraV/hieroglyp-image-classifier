import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HieroglyphPage from "./HieroglyphPage";

const App: FC = () => {
  return (
      <Router>
        <Route exact path="/">
          <HieroglyphPage />
        </Route>
      </Router>
  );
};

export default App;
