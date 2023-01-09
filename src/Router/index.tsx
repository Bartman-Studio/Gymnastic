import { Routes, Route } from "react-router-dom";
import { Login, Home, Register, Welcome } from "../pages";
import { AppLayout, LoginLayout } from "../layout";
import { PrivateRoute } from "./Private";

export const Router = (): any => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <AppLayout>
              <Home />
            </AppLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/welcome"
        element={
          <PrivateRoute>
            <AppLayout>
              <Welcome />
            </AppLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <LoginLayout>
            <Login />
          </LoginLayout>
        }
      />
      <Route
        path="/register"
        element={
          <LoginLayout>
            <Register />
          </LoginLayout>
        }
      />
    </Routes>
  );
};
