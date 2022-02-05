import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { rootReducer } from './redux/reducers';
import middleware from './redux/middleware';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


const store= createStore(rootReducer, middleware)
ReactDOM.render(
  <Provider store={store}>

          <App />
    
  </Provider>,
  document.getElementById('root')
);


