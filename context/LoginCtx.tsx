"use client";

import { createContext, useState } from "react";

type typeEmail = string;
type typePassword = string;

export interface ILogin {
  email: typeEmail;
  password: typePassword;
}

export interface ILoginCtx {
  login: ILogin;
  email: typeEmail;
  password: typePassword;
  updateLogin: (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => void;
  updateEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updatePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginCtx = createContext<ILoginCtx | undefined>(undefined);

export function LoginCtxProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [login, setLogin] = useState<ILogin>({
    email: "",
    password: "",
  });
  const { email, password } = login;

  const updateLogin = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value: string = event.target.value;

    setLogin((prevLogin) => ({
      ...prevLogin,
      [field]: value,
    }));
  };

  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;

    setLogin((prevLogin) => ({
      ...prevLogin,
      email: value,
    }));
  };

  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;

    setLogin((prevLogin) => ({
      ...prevLogin,
      password: value,
    }));
  };

  return (
    <LoginCtx.Provider
      value={{
        login,
        email,
        password,
        updateLogin,
        updateEmail,
        updatePassword,
      }}
    >
      {children}
    </LoginCtx.Provider>
  );
}
