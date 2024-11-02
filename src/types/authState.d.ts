type User = {
  avatar: string;
  userName: string;
  email?: string;
  userRoles?: string[];
};

interface ISessionState {
  signedIn: boolean;
  token: string | null;
}

type AuthState = {
  user: User;
  session: ISessionState;
};
