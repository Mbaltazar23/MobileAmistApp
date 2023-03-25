import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { ChangePasswordAuthUseCase } from "../../../Domain/useCases/auth/ChangePasswordAuth";
import { SaveUserLocalUseCase } from "../../../Domain/useCases/userLocal/SaveUserLocal";
import { useUserLocal } from "../../hooks/useUserLocal";

const ChangePasswordViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    password01: "",
    password02: "",
  });

  const { user, getUserSession } = useUserLocal();
  console.log("Usuario en Sesion : " + JSON.stringify(user));

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const changePassword = async () => {
    if (isValidResetPass()) {
      const email = await AsyncStorage.getItem("emailReset");
      console.log("EMAIL: " + email);
      if (email !== null) {
        const response = await ChangePasswordAuthUseCase(
          email.toString(),
          values.password01
        );
        console.log("RESPONSE: " + JSON.stringify(response));
        if (!response.status) {
          setErrorMessage(response.msg);
        } else {
          await SaveUserLocalUseCase(response.data);
          getUserSession();
        }
      }
    }
  };

  const isValidResetPass = (): boolean => {
    if (values.password01 === "") {
      setErrorMessage("Debe ingresar su Password");
      return false;
    }
    if (values.password02 === "") {
      setErrorMessage("Debe repetir su Password");
      return false;
    }
    if (values.password01 !== values.password02) {
      setErrorMessage("La password no fue validada");
      return false;
    }
    return true;
  };

  return {
    ...values,
    user,
    onChange,
    changePassword,
    errorMessage,
  };
};

export default ChangePasswordViewModel;
