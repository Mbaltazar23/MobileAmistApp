import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { RootStackParamList } from "../../../../../App";
import useViewModel from "./ViewModel";
import styles from "./Styles";
import { RoundedButton } from "../../../components/RoundedButton";

interface Props extends StackScreenProps<RootStackParamList> {}

export const ProfileInfoScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { removeUserSession, user } = useViewModel();
  useEffect(() => {
    if (user.id === "") {
      navigation.replace("HomeScreen");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../../assets/amist.jpg")}
        style={styles.imageBackground}
      />
      <Pressable
        style={styles.logout}
        onPress={() => {
          removeUserSession();
        }}
      >
        <Image
          source={require("../../../../../assets/logout.png")}
          style={styles.logoutImage}
        />
      </Pressable>

      <View style={styles.logoContainer}>
        {user?.image !== "" && (
          <Image source={{ uri: user?.image }} style={styles.logoImage} />
        )}
      </View>

      <View style={styles.form}>
        <View style={styles.formInfo}>
          <Image
            source={require("../../../../../assets/my_user.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{user?.dni}</Text>
            <Text style={styles.formTextDescription}>DNI del usuario</Text>
          </View>
        </View>
        <View style={{ ...styles.formInfo, marginTop: 25 }}>
          <Image
            source={require("../../../../../assets/user.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{user?.name}</Text>
            <Text style={styles.formTextDescription}>Nombre del usuario</Text>
          </View>
        </View>
        <View style={{ ...styles.formInfo, marginTop: 25 }}>
          <Image
            source={require("../../../../../assets/email.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{user?.email}</Text>
            <Text style={styles.formTextDescription}>Correo electronico</Text>
          </View>
        </View>
        <View style={{ ...styles.formInfo, marginTop: 25, marginBottom: 38 }}>
          <Image
            source={require("../../../../../assets/phone.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{user?.phone}</Text>
            <Text style={styles.formTextDescription}>Telefono</Text>
          </View>
        </View>
        <RoundedButton
          onPress={() => {
            navigation.navigate("ProfileUpdateScreen", { user: user! });
          }}
          text="Actualizar Informacion"
        />
      </View>
    </View>
  );
};
