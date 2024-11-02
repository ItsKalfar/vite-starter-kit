interface AsyncReducers {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: Reducer<any, UnknownAction>;
}

interface IRootState {
  auth: AuthState;
}
