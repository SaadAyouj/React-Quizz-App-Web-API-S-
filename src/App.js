import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Level1 from "./levels/Level1";
import Level2 from "./levels/Level2.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Level1} />
        <Route exact path="/level2" component={Level2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
