import { Suspense } from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/store";

import { protectedRoutes, publicRoutes } from "@/configs/routes.config";
import appConfig from "@/configs/app.config";

import { ReactQueryProvider } from "@/react-query/react-query-provider.tsx";
import ThemeProviderWrapper from "./components/theme-provider.tsx";
import { Loading } from "./components/loading";
import PublicRoute from "./components/routes/public-routes";
import ProtectedRoute from "./components/routes/protected-routes";
import AuthorityGuard from "./components/routes/authority-guard";

const { authenticatedEntryPath } = appConfig;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route
          path="/"
          element={<Navigate replace to={authenticatedEntryPath} />}
        />
        {protectedRoutes.map(
          ({ key, path, component: Component, allowedRoles }, index) => (
            <Route
              key={key + index}
              path={path}
              element={
                <AuthorityGuard allowedRoles={allowedRoles}>
                  <Component />
                </AuthorityGuard>
              }
            />
          )
        )}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        {publicRoutes.map(
          ({ key, path, component: Component, allowedRoles }, index) => (
            <Route
              key={key + index}
              path={path}
              element={
                <AuthorityGuard allowedRoles={allowedRoles}>
                  <Component />
                </AuthorityGuard>
              }
            />
          )
        )}
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReactQueryProvider>
          <ThemeProviderWrapper>
            <BrowserRouter>
              <Suspense fallback={<Loading />}>
                <AppRoutes />
              </Suspense>
            </BrowserRouter>
          </ThemeProviderWrapper>
        </ReactQueryProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
