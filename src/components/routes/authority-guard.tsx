import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/store";
import { isEmpty } from "lodash";
import { useMemo } from "react";

type AuthorityGuardProps = PropsWithChildren<{
  allowedRoles?: string[];
}>;

const AuthorityGuard = (props: AuthorityGuardProps) => {
  const { allowedRoles = [], children } = props;
  let userRoles = useAppSelector(
    (state: IRootState) => state.auth.user.userRoles
  );

  userRoles = userRoles ? userRoles : [];

  const roleMatched = useMemo(() => {
    return allowedRoles.some((role) => userRoles.includes(role));
  }, [allowedRoles, userRoles]);

  const hasAccess = isEmpty(allowedRoles) || isEmpty(userRoles) || roleMatched;

  return hasAccess ? <>{children}</> : <Navigate to="/" />;
};

export default AuthorityGuard;
