import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';



function App() {
  
  return (
    <>
      <header>
        <Nav />
      </header>
      <section>
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/' component={Home} />
        </Switch>
      </section>
    </>
  );
}

export default App;
