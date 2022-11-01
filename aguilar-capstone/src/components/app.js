import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './features/header-container';
import Home from './pages/home';
import Services from './pages/services';
import Contact from './pages/contact';
import NoPageFound from './pages/no-page-found';
import Footer from './features/footer-container';
import Icons from '../helpers/icons';

export default class App extends Component {
  render() {
    Icons();

    return (
      <div className='app'>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
              <Route component={NoPageFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
