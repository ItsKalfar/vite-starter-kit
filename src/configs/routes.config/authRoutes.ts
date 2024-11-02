import { lazy } from "react";

export const authRoutes: Route[] = [
  {
    key: "signIn",
    path: `/sign-in`,
    component: lazy(() => import("@/pages/auth/sign-in")),
    allowedRoles: [],
  },
  {
    key: "signUp",
    path: `/sign-up`,
    component: lazy(() => import("@/pages/auth/sign-up")),
    allowedRoles: [],
  },
  {
    key: "home",
    path: `/`,
    component: lazy(() => import("@/pages/home")),
    allowedRoles: [],
  },
];
