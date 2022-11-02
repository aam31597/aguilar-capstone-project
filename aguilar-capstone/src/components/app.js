import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './features/header-container';
import Home from './pages/home';
import Services from './pages/services';
import Contact from './pages/contact';
import NoPageFound from './pages/no-page-found';
import Footer from './features/footer-container';
import Icons from '../helpers/icons';

export default function() {
  Icons();
      
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(response => 
        response.json()
    ).then(data => {
        setData(data)
        console.log(data)
    })
    .then(error => console.log(error))
  }, [])

  return (
    <div className='app'>
      {data.deploy}
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route component={NoPageFound} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}