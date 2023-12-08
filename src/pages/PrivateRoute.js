import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import AuthService from "./AuthService";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    AuthService.getCurrentUser()
      .then(() => {
        setAuthenticated(true);
      })
      .catch(() => {
        navigate("/SignIn"); 
      });
  }, []);

  return authenticated ? <Component {...rest} /> : null;
};

export default PrivateRoute;
