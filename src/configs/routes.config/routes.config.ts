import { lazy } from "react";
import { authRoutes } from "./authRoutes";

export const protectedRoutes: Route[] = [
  {
    key: "home",
    path: `/home`,
    component: lazy(() => import("@/pages/home")),
    allowedRoles: [],
  },
];

export const publicRoutes: Route[] = [...authRoutes];
