type AppConfig = {
  apiPrefix: string;
  authenticatedEntryPath: string;
  unAuthenticatedEntryPath: string;
  tourPath: string;
  locale: string;
};

type Route = {
  key: string;
  path: string;
  component: LazyExoticComponent<<T>(props: T) => JSX.Element>;
  allowedRoles: string[];
};
