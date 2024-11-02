import { authRoutes } from "./authRoutes";

export const protectedRoutes: Route[] = [];

export const publicRoutes: Route[] = [...authRoutes];
