import React from "react";
import Router from "./components/Router";
import { Route, Switch } from "react-router-dom";
import TableData from "./components/TableData";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/table" component={TableData} />
          </Switch>
        </React.Fragment>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
