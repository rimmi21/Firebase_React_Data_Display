import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import TableData from "./TableData";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/table" exact component={TableData} />
    </Switch>
  </BrowserRouter>
);
export default Router;
