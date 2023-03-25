import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { LoginAuthUseCase } from "../../../Domain/useCases/auth/LoginAuth";
import { SaveUserLocalUseCase } from "../../../Domain/useCases/userLocal/SaveUserLocal";
import { useUserLocal } from "../../hooks/useUserLocal";

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    dni: "",
    password: "",
  });
  const { user, getUserSession } = useUserLocal();
  console.log("Usuario en Sesion : " + JSON.stringify(user));

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.dni, values.password);
      console.log("response : " + JSON.stringify(response));
      if (!response.status) {
        setErrorMessage(response.msg);
      } else {
        await SaveUserLocalUseCase(response.data);
        getUserSession();
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.dni === "") {
      setErrorMessage("Ingrese un Dni valido");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("Ingrese un password");
      return false;
    }
    return true;
  };

  const removeEmailReset = async () => {
    const emailReset = await AsyncStorage.getItem("emailReset");
    console.log(emailReset);
    if (emailReset !== null || emailReset !== undefined) {
      await AsyncStorage.removeItem("emailReset");
      console.log("Correo quitado");
    }
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };


  return {
    ...values,
    user,
    onChange,
    errorMessage,
    login,
    removeEmailReset
  };
};


export default HomeViewModel;
