import React, { useEffect } from "react";
import {
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RoundedButton } from "../../components/RoundedButton";
import { RootStackParamList } from "../../../../App";
import DNIInput from "../../components/DniInput";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from "./Styles";

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {}

export const HomeScreen = ({ navigation, route }: Props) => {
  const {
    dni,
    password,
    onChange,
    login,
    errorMessage,
    user,
    removeEmailReset,
  } = useViewModel();

  useEffect(() => {
    if (errorMessage !== "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      console.log("Usuario : " + user);

      const role = user.roles[0]?.role; // Accede al primer objeto del arreglo "roles" y obtiene el valor de "role"
      if (role === "Alumno") {
        // Verifica si el valor de "role" es "Alumno"
        navigation.replace("StudentTabsNavigator");
      } else {
        navigation.replace("TeacherTabsNavigator");
      }
    }
  }, [user]);

  useEffect(() => {
    removeEmailReset();
  }, [removeEmailReset]);

  return (
    // COLUMN
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/amist.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/AmistAppIcon.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Amist App</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>

        <DNIInput
          image={require("../../../../assets/my_user.png")}
          placeholder="Ingrese su Dni"
          keyboardType="default"
          value={dni}
          property="dni"
          onChangeText={onChange}
        />

        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Ingrese su Password"
          keyboardType="default"
          property="password"
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="Ingresar" onPress={() => login()} />
        </View>
        <View style={styles.formPassword}>
          <Text>Olvido su Password ?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetPasswordScreen")}
          >
            <Text style={styles.formPasswordText}>Recuperela</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
