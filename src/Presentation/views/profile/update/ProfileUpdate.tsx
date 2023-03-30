import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { CustomTextInput } from "../../../components/CustomTextInput";
import { RoundedButton } from "../../../components/RoundedButton";
import useViewModel from "./ViewModel";
import styles from "./Styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { MyColors } from "../../../theme/AppTheme";
import DNIInput from "../../../components/DniInput";
interface Props
  extends StackScreenProps<RootStackParamList, "ProfileUpdateScreen"> {}

export const ProfileUpdateScreen = ({ navigation, route }: Props) => {
  const { user } = route.params;
  const {
    address,
    name,
    phone,
    dni,
    errorMessage,
    image,
    onChange,
    update,
    loading,
    successMessage,
  } = useViewModel(user);

  useEffect(() => {
    if (errorMessage != "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage != "") {
      ToastAndroid.show(successMessage, ToastAndroid.LONG);
    }
  }, [successMessage]);

  return (
    // COLUMN
    <View style={styles.container}>
      <Image
        source={require("../../../../../assets/amist.jpg")}
        style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <TouchableOpacity>
          {image == "" ? (
            <Image source={{ uri: user?.image }} style={styles.logoImage} />
          ) : (
            <Image source={{ uri: image }} style={styles.logoImage} />
          )}
        </TouchableOpacity>

        <Text style={styles.logoText}>{user.roles[0]?.role}</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>ACTUALIZAR {user.roles[0]?.role}</Text>

          <DNIInput
            image={require("../../../../../assets/my_user.png")}
            placeholder="Rut (DNI)"
            keyboardType="default"
            value={dni}
            property="dni"
            onChangeText={onChange}
          />

          <CustomTextInput
            placeholder="Nombres"
            keyboardType="default"
            image={require("../../../../../assets/user.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />

          <CustomTextInput
            placeholder="Telefono"
            keyboardType="default"
            image={require("../../../../../assets/phone.png")}
            property="phone"
            onChangeText={onChange}
            value={phone}
          />

          <CustomTextInput
            placeholder="Dirección"
            keyboardType="default"
            image={require("../../../../../assets/address.png")}
            property="address"
            onChangeText={onChange}
            value={address}
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton text="CONFIRMAR" onPress={() => update()} />
          </View>
        </ScrollView>
      </View>

      {loading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color={MyColors.primary}
        />
      )}
    </View>
  );
};

// HOT RELOAD
