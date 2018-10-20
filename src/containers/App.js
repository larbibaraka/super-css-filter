import React, { Component } from 'react';
import './App.css';
import Filters  from '../components/Filters';
/*import Settings from '../components/Settings';
import CssCode  from '../components/CssCode';
import Preview from '../components/Preview';
 */
class App extends Component {
  render() {
    return (
      <div className=" is-fluid">
          <div className="columns">
              <div className="column is-3">
                  <Filters/>
              </div>
           </div>

      </div>
    );
  }
}

export default App;
