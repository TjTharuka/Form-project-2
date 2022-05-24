import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';
import jwt_decode from 'jwt-decode';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Loading } from './components';
import * as serviceWorker from './serviceWorker';
// import styles
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/vendor/nucleo/css/nucleo.css';
import './styles/vendor/font-awesome/css/font-awesome.min.css';
import './styles/scss/argon-design-system-react.scss';
import './styles/styles.scss';
import './index.css';
import { logoutUser, userLogin } from './actions/auth/auth';

require('dotenv').config();

const webFontScript = document.createElement('script');
webFontScript.src =
  'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
window.document.body.appendChild(webFontScript);

WebFont.load({
  custom: {
    families: [
      'Segoe UI Regular',
      'Segoe UI Semibold',
      'Segoe UI Bold',
      'Helvetica Regular',
      'Helvetica Neue',
      'Helvetica Bold',
      'OpenSans Regular',
    ],
  },
});

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    if (localStorage.getItem('user_accessToken')) {
      
      store.dispatch(
        userLogin(jwt_decode(localStorage.getItem('user_accessToken')))
      );
    } else {
      store.dispatch(logoutUser());
    }

    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<Loading />, document.getElementById('root'));
renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
