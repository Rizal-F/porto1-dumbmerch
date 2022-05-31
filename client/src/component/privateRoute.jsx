import { Outlet, Navigate } from "react-router-dom";

import React from "react";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isSignin = true;

  return isSignin ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
