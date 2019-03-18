import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { rehydrateMarks } from 'react-imported-component';

import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

// redux-logger is a middleware that lets you log every state change
import logger from 'redux-logger';

// redux-thunk is a middleware that lets you dispatch async actions
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware
} from 'redux';
import App from './app/App.jsx';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker.js';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

const element = document.getElementById('app')
const app = (
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>
)
// In production, we want to hydrate instead of render
// because of the server-rendering
if (process.env.NODE_ENV === 'production') {
  // rehydrate the bundle marks
  rehydrateMarks().then(() => {
    ReactDOM.hydrate(app, element);
    serviceWorker.unregister();

  });
} else {
  ReactDOM.render(app, element);
  serviceWorker.unregister();

}
// Enable Hot Module Reloading
if (module.hot) {
  module.hot.accept();
}
