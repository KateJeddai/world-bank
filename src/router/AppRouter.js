import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import CountriesGeneral from '../components/CountriesGeneral';
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
               <Route path="/countries"  
                     component={CountriesGeneral}
                />  
          </Switch>    
      </div>
    </Router>
)

export default AppRouter;
