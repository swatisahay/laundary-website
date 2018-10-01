
import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';





import Header from './Header';



function App(){
  return(
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' render={() => <Home />} />


      </Switch>

    </div>

  );
}

export default App;
