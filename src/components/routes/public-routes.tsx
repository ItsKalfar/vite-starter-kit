import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/store";
import appConfig from "@/configs/app.config";

const PublicRoute = () => {
  const { token, signedIn } = useAppSelector(
    (state: IRootState) => state.auth.session
  );
  const { authenticatedEntryPath } = appConfig;

  const hasAccess = token && signedIn;

  return hasAccess ? <Navigate to={`${authenticatedEntryPath}`} /> : <Outlet />;
};

export default PublicRoute;
