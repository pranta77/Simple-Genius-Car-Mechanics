import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { users } = useAuth();

  if (!users.email) {
    return <Navigate to="/login" replace state={{ from: rest.location }} />;
  }

  return (
    <Routes>
      <Route {...rest} element={children} />
    </Routes>
  );
};

export default PrivateRoute;
