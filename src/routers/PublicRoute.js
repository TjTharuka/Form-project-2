import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.user.user_id);

  return (
    <>
      {!isAuthenticated ? (
        <Route
          {...rest}
          component={(props) => {
            return (
              <div>
                <Component {...props} />
              </div>
            );
          }}
        />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default PublicRoute;
