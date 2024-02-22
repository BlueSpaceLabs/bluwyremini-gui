import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../modules/auth/AuthLayout";
import SignInPage from "../pages/login-management/SignIn";

const AuthRoutes = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<h1>sign up</h1>} />
      <Route path="*" element={<Navigate to="sign-in" />} />
      <Route index element={<SignInPage />} />
    </Route>
  </Routes>
);

export { AuthRoutes };
