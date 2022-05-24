import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
import { useMedia } from 'react-media';
import PublicRoute from './PublicRoute';
import 'react-toastify/dist/ReactToastify.css';
import ToastWrapper from '../components/toastWrapper/ToastWrapper';
import LoadingWrapper from '../components/loadingWrapper/LoadingWrapper';
import GLOBAL_MEDIA_QUERIES from '../config/globalQueries';
import { NotFound } from '../components';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import PrivateRoute from './PrivateRoute';
import LandingPage from '../components/LandingPage/LandingPage';

export const history = createBrowserHistory();

const AppRouter = () => {
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  return (
    <Router history={history}>
      <ToastContainer
        position={!matches.ipad ? 'bottom-left' : 'top-center'}
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastWrapper />

      <LoadingWrapper />
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={LandingPage} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
