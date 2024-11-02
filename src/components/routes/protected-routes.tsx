import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/store";
import appConfig from "@/configs/app.config";

const ProtectedRoute = () => {
  const { token, signedIn } = useAppSelector(
    (state: IRootState) => state.auth.session
  );
  const { unAuthenticatedEntryPath } = appConfig;

  const hasAccess = token && signedIn;

  return hasAccess ? (
    <Outlet />
  ) : (
    <Navigate to={`${unAuthenticatedEntryPath}`} />
  );
};

export default ProtectedRoute;
