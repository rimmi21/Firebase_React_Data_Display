import React from 'react';
import Router from './components/Router';
import {Route,Switch}  from 'react-router-dom';
import TableData from './components/TableData';

const App=()=> {
  
    return (
      <Router>
      <React.Fragment>
      <Switch>
      <Route exact path='/table' component={TableData}/>
      </Switch>
    
    </React.Fragment>
    </Router>
    
  );

};

export default App;
