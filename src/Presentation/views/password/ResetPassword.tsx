import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { RoundedButton } from "../../components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from "./Styles";

interface Props extends StackScreenProps<RootStackParamList> {}

export const ResetPasswordScreen = ({ navigation, route }: Props) => {
  const { email, errorMessage, onChange, resetPassEmail, emailRest } =
    useViewModel();

  useEffect(() => {
    if (errorMessage !== "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (emailRest !== "") {
      navigation.replace("ChangePasswordScreen");
      console.log(emailRest);
      
    }
  }, [emailRest]);

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
        <ScrollView>
          <Text style={styles.formText}>
            INGRESE SU CORREO PARA RECUPERARLO
          </Text>
          <CustomTextInput
            placeholder="Ingrese su Correo"
            keyboardType="default"
            image={require("../../../../assets/email.png")}
            property="email"
            onChangeText={onChange}
            value={email}
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton text="Recuperar" onPress={() => resetPassEmail()} />
          </View>
          <View style={styles.formPassword}>
            <Text>Recuerda su Password ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Text style={styles.formPasswordText}>Ingrese</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
