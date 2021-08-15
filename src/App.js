import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Step from "./pages/Step";
import Todolist from "./pages/Todolist";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:id">
            <Step />
          </Route>
          <Route path="/">
            <Todolist />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
