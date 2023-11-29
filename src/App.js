import React from 'react';
import ScrollToTop from './ScrollTotop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <React.StrictMode>
        <Router>
          <Header />
          <Home />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </ScrollToTop>
          <Footer />
        </Router>
      </React.StrictMode>
    </>
  )
}
