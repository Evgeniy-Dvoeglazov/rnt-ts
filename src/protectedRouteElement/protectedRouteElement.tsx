import React from "react";
import { Navigate } from "react-router-dom";
import { Pages } from "../app/app";

interface ProtectedRouteElementProps {
  element: React.FC<object>;
  loggedIn: boolean;
}

const ProtectedRouteElement = ({
  element: Component,
  ...props
}: ProtectedRouteElementProps) => {
  return props.loggedIn ? <Component /> : <Navigate to={Pages.Authorization} />;
};

export default ProtectedRouteElement;
