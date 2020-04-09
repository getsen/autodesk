import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Header from './components/Header';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

function langRedirect(props) {
  const defaultLang = 'en';
  const redirectPath = `/developer/${defaultLang}${props.history.location.pathname}`;
  props.history.replace({
    pathname: redirectPath,
  });
}

ReactDOM.render((
  <BrowserRouter>
    <Route exact path="/" render={() => (
      <Redirect to="/developer/documentation"/>
    )}/>
    
    <Switch>
      <Route exact path="/developer/*" render={() => <App />}>
        <Route path = "/developer/documentation" component = {App} />
        <Route path="/developer/:lang/api/dummy1/intro" render={() => <Header header='INTRO' />} />
        <Route path="/developer/:lang/api/dummy1/guide" render={() => <Header header='GUIDE' />} />
        <Route path="/developer/:lang/api/dummy1/reference" render={() => <Header header='REFERENCE' />} />
      </Route>
      <Route path="*" render={langRedirect} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));