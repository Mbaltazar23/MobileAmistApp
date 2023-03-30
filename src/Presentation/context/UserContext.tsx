import React, { createContext, useEffect, useState } from "react";
import { User } from "../../Domain/entities/User";
import { SaveUserLocalUseCase } from "../../Domain/useCases/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";
import { RemoveUserLocalUseCase } from "../../Domain/useCases/userLocal/RemoveUserLocal";

export const userInitialState: User = {
  id: "",
  dni: "",
  name: "",
  phone: "",
  email: "",
  points: "",
  password: "",
  address: "",
  status: "",
  image: "",
  token: "",
  roles: [],
};

export interface UserConextProps {
  user: User;
  saveUserSesion: (user: User) => Promise<void>;
  getUserSession: () => Promise<void>;
  removeUserSession: () => Promise<void>;
}

export const UserConext = createContext({} as UserConextProps);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(userInitialState);

  useEffect(() => {
    getUserSession();
  }, []);

  const saveUserSesion = async (user: User) => {
    await SaveUserLocalUseCase(user);
    setUser(user);
  };

  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();
    setUser(user);
  };

  const removeUserSession = async () => {
    await RemoveUserLocalUseCase();
    setUser(userInitialState);
  };
  return (
    <UserConext.Provider
      value={{
        user,
        saveUserSesion,
        getUserSession,
        removeUserSession,
      }}
    >
      {children}
    </UserConext.Provider>
  );
};
