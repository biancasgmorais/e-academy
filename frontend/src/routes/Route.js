import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layout/auth';
import DefaultLayout from '../pages/_layout/default';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;
  const { signedal } = store.getState().authaluno;
  const { signedprof } = store.getState().authprofessor;

  if (!signed && isPrivate) {
    if (!signedprof && isPrivate) {
      if (!signedal && isPrivate) {
        return <Redirect to="/" />;
      }
    }
  }

  if (signed) {
    if (signed && !isPrivate) {
      return <Redirect to="/modules" />;
    }
  }

  if (signedal) {
    if (signedal && !isPrivate) {
      return <Redirect to="/modulesaluno" />;
    }
  }

  if (signedprof) {
    if (signedprof && !isPrivate) {
      return <Redirect to="/modulesprofessor" />;
    }
  }

  const Layout = signed || signedal || signedprof ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
