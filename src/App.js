import React from 'react';

// Redux Connect
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { routes } from './routes';

import 'primereact/resources/themes/saga-blue/theme.css'; // theme css
import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css'; // icon css
import 'primeflex/primeflex.css'; // flex css
import 'react-toastify/dist/ReactToastify.css'; // toastify css
import './assets/css/style.scss'; // global style css

import Header from './theme/shared/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.id}
                exact={route.exact}
                path={route.path}
                render={() => {
                  return <route.component />;
                }}
              />
            ))}
          </Switch>
        </main>
        <ToastContainer theme="colored" icon autoClose={2000} />
      </div>
    </Router>
  );
}

export default connect()(App);
