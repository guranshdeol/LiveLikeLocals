import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Payment from './pages/Payment';
import Bookings from './pages/Bookings';
import KnowUs from './pages/KnowUs';
import Update from './pages/Update';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
          <Route path="/payment" component={Payment} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/knowus" component={KnowUs} />
          <Route path="/update" component={Update} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
