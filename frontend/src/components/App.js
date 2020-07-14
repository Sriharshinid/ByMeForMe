import React from 'react';
import '../css/App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Doodles from './Doodles';
import Error from './Error';
import Navigation from './Navigation';
import Food from './Food';
import Current from './Current';

const serverDomain = 'https://by-me-for-me-backend.herokuapp.com/api/'

class App extends React.Component {

  constructor(props) {
		super(props);
		this.state = {food: [], doodles:[]};
  }

  componentWillMount() { 
    fetch(serverDomain + 'myImages')
        .then(res => res.json())
        .then((data) => {
          var arr = data["_embedded"]["myImages"];
          var foodArr = [];
          var doodleArr = [];
          arr.forEach(pic => {
            var obj = {
              src: serverDomain + pic["fullPath"],
              thumbnail: serverDomain + pic["fullPath"],
              caption: pic["description"]
            };
            if(pic["fullPath"][0] === 'f') {
              foodArr.push(obj);
            } else if (pic["fullPath"][0] === 'd') {
              doodleArr.push(obj);
            }
          });
          this.setState({ food: foodArr, doodles: doodleArr });
        })
        .catch(console.log)
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/ByMeForMe" component={Home} exact/>
             <Route path="/ByMeForMe/doodles" render={(props) => <Doodles images={this.state.doodles} />}/>
             <Route path="/ByMeForMe/food" render={(props) => <Food images={this.state.food} />}/>
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
