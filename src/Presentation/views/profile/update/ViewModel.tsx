import React, { useState, useContext } from "react";
import { UdpateUserUseCase } from "../../../../Domain/useCases/user/UpdateUser";
import { User } from "../../../../Domain/entities/User";
import { ResponseAPIAmistApp } from "../../../../Data/sources/remote/models/ResponseApiAmistApp";
import { UserConext } from "../../../context/UserContext";

const ProfileUpdateViewModel = (user: User) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [values, setValues] = useState(user);
  const [loading, setLoading] = useState(false);
  const { saveUserSesion } = useContext(UserConext);

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const onChangeInfoUpdate = (
    dni: string,
    name: string,
    phone: string,
    address: string
  ) => {
    setValues({ ...values, dni, name, phone, address });
  };

  const update = async () => {
    if (isValidForm()) {
      setLoading(true);
      let response = {} as ResponseAPIAmistApp;
      if (values.image?.includes("https://")) {
        response = await UdpateUserUseCase(values);
      }

      //const response = await RegisterAuthUseCase(values);
      setLoading(false);
      console.log("RESULT: " + JSON.stringify(response));

      if (response.status) {
        saveUserSesion(response.data);
        setSuccessMessage(response.msg);
      } else {
        setErrorMessage(response.msg);
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.name === "") {
      setErrorMessage("Ingresa tu nombre");
      return false;
    }
    if (values.dni === "") {
      setErrorMessage("Ingresa tu apellido");
      return false;
    }
    if (values.phone === "") {
      setErrorMessage("Ingresa tu telefono");
      return false;
    }

    return true;
  };

  return {
    ...values,
    onChange,
    update,
    onChangeInfoUpdate,
    errorMessage,
    successMessage,
    loading,
    user,
  };
};

export default ProfileUpdateViewModel;
