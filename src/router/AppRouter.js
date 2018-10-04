import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import RegionsExpectancy from '../components/RegionsExpectancy';
import RegionsGeneral from '../components/RegionsGeneral';

export const history = createHistory();

const AppRouter = () => (
    <Router history = {history}>
      <div>
          <Header />
          <Switch>
              <Route path="/"
                     component={Dashboard}
                     exact
                />
              <Route path="/regions"  
                     component={RegionsGeneral}
                />    
              <Route path="/regions/life-expectancy"  
                     component={RegionsExpectancy}
                     exact
               />      
                 
          </Switch>    
      </div>
    </Router>
)

export default AppRouter;
