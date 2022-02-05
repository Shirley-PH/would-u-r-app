import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { rootReducer } from './redux/reducers';
import middleware from './redux/middleware';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { BrowserRouter } from 'react-router-dom';


const store= createStore(rootReducer, middleware)
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


