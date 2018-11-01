import React, { Component } from 'react';
import './App.css';
import Filters  from '../components/Filters';
import Navbar from '../components/Navbar';
/*import Settings from '../components/Settings';*/
import CssCode  from '../components/CssCode';
import Preview from '../components/Preview';
 

class App extends Component {
  render() {
    return (
      <div className=" is-fluid">
        <Navbar/>
         <div className="columns" >
              <div className="column is-2" >
                  <Filters/>
              </div>
              <div className="column is-3">
                  <Preview/>
              </div>
              <div className="column is-4">
                  <CssCode/>
              </div>
              
           </div>

      </div>
    );
  }
}

export default App;
