import React, { Component } from 'react';
import './App.css';
import Filters  from '../components/Filters';
import Settings from '../components/Settings';
import CssCode  from '../components/CssCode';
import Preview from '../components/Preview';
 
class App extends Component {
  render() {
    return (
      <div className="App wrapper">
     	  <div className="row">
            <div className="col-lg-2">
               <Filters/>
            </div>
            <div className="col-lg-6">
               <Preview/>
            </div>
            <div className="col-lg-4">
              <CssCode/>
            </div>
        </div> 
        <Settings/>
   
     
      </div>
    );
  }
}

export default App;
