import { User } from './statesTypes';

export type RefreshRes = {
  user: User;
  accessToken: string;
};

export type Inputs = {
   answer: string;
};

export type InputsAuth = {
  username?: string ;
  email: string;
  password: string;
};

export type AuthFormType = {
  title: string;
  type: 'signin' | 'signup';
};
