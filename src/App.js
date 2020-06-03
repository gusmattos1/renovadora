import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import QuemSomos from './components/QuemSomos';
import Galeria from './components/Galeria';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quem_somos" component={QuemSomos} />
          <Route exact path="/galeria" component={Galeria} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
