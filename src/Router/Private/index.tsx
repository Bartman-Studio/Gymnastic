import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context";
import { iPrivate } from "../../interfaces";

export const PrivateRoute: FC<any> = ({ children }) => {
  const { user }: any = useAuth();

  // if (!user?.uid) {
  //   return <Navigate to={"/login"} replace />;
  // }

  return children;
};
