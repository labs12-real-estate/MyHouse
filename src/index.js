import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import awsConfig from './aws-exports';

// Base configure of toasts.
toast.configure({ autoClose: 2200, pauseOnHover: false });

// This configures Amplify module, makes it available globally throughout app.
Amplify.configure(awsConfig);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
