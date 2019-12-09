export interface User {
  id: string;
  fakeToken: string;
  name: {
    firstName: string;
    lastName: string;
  };
  login: string;
  password: string;

}
