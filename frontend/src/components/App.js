import React from 'react';
import '../css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
             <Route path="/" component={Home} exact/>
             <Route path="/doodles" component={Doodles}/>
             <Route path="/food" component={Food}/>
             <Route path="/current" component={Current}/>
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
