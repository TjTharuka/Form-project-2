import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import FooterComponent from '../components/commons/Footer/FooterComponent';
import NavBar from '../components/commons/NavBar/NavBar';
import { history } from './AppRouter';

export const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.user.user_id);

  const query = location.pathname;
  const searchUrl = location.search;

  // Temporay
  const [addPaperState, setAddPaperState] = useState(false);

  let finalUrl;
  if (searchUrl) {
    finalUrl = `${query}${searchUrl}`;
  } else {
    finalUrl = query;
  }

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login');
    } else {
      history.push(finalUrl);
    }
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <NavBar addPaperState={addPaperState} setAddPaperState={setAddPaperState}/>
          <Route
            {...rest}
            component={(props) => (
              <div>
                <Component {...props} addPaperState={addPaperState} setAddPaperState={setAddPaperState}/>
              </div>
            )}
          />
          {/* <FooterComponent /> */}
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
