import { Routes as AppRoutes, Navigate, Route } from "react-router-dom";
import { useIsAuthenticated } from "../auth/Auth";
import { ROUTE_SEGMENTS } from "../config/Routes";
import Layout from "../layout/Layout";
import {
  Dashboard,
  Login,
  NotFound,
  Register,
  DrillHoles,
  Readme,
} from "../pages";

/**
 * @component Routes
 */
const Routes = () => {
  return (
    <AppRoutes>
      {/* ########### Private Routes ########### */}
      <Route path={ROUTE_SEGMENTS.DASHBOARD} element={<PrivateRoutes />}>
        <Route index element={<Dashboard />} />
        <Route path={ROUTE_SEGMENTS.DRILL_HOLES} element={<DrillHoles />} />
        <Route path={ROUTE_SEGMENTS.README} element={<Readme />} />
      </Route>

      {/* ########### Public Routes ########### */}
      <Route path={ROUTE_SEGMENTS.LOGIN} element={<Login />} />
      <Route path={ROUTE_SEGMENTS.REGISTER} element={<Register />} />
      <Route path="/*" element={<NotFound />} />
    </AppRoutes>
  );
};

export default Routes;

/**
 * This component checks whether the user is authenticated or not,
 * in case of authentication the dashboard will be run, otherwise
 * the user will be redirected to the login page.
 * @component PrivateRoutes
 */
const PrivateRoutes = () => {
  const isAuthenticated: boolean = useIsAuthenticated();

  if (isAuthenticated) {
    return <Layout />;
  } else {
    return <Navigate to={ROUTE_SEGMENTS.LOGIN} />;
  }
};
