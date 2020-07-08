import React from 'react';
import '../css/App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Doodles from './Doodles';
import Error from './Error';
import Navigation from './Navigation';
import Food from './Food';
import Current from './Current';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/ByMeForMe" component={Home} exact/>
             <Route path="/ByMeForMe/doodles" component={Doodles}/>
             <Route path="/ByMeForMe/food" component={Food}/>
             <Route path="/ByMeForMe/current" component={Current}/>
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
