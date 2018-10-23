import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

/** redux part */
import {Provider} from 'react-redux';
import { createStore , applyMiddleware } from "redux";
import { CreateLogger } from "redux-logger";
import thunk from 'redux-thunk';

/** reducer*/
import rootReducer from './reducers';


const middleware = [thunk , CreateLogger(rootReducer)];

const store = createStore(rootReducer, {} , applyMiddleware(...middleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
