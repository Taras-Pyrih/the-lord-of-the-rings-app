import React from 'react';
import ReactDOM from 'react-dom/client';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const myStore = createStore(rootReducer, composedEnhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);