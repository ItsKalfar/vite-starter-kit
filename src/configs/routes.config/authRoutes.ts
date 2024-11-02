import { lazy } from "react";

export const authRoutes: Route[] = [
  {
    key: "signIn",
    path: `/sign-in`,
    component: lazy(() => import("@/pages/auth")),
    allowedRoles: [],
  },
  {
    key: "signUp",
    path: `/sign-up`,
    component: lazy(() => import("@/pages/auth")),
    allowedRoles: [],
  },
  {
    key: "forgotPassword",
    path: `/forgot-password`,
    component: lazy(() => import("@/pages/auth")),
    allowedRoles: [],
  },
  {
    key: "resetPassword",
    path: `/reset-password`,
    component: lazy(() => import("@/pages/auth")),
    allowedRoles: [],
  },
];
