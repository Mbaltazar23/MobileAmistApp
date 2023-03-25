import React from "react";
import { Image, KeyboardType, StyleSheet, TextInput, View } from "react-native";

interface Props {
  image: any;
  placeholder: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  value: string;
  onChangeText: (property: string, value: any) => void;
}

export const CustomTextInput = ({
  image,
  value,
  placeholder,
  keyboardType,
  secureTextEntry,
  property,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={image} />

      <TextInput
        style={styles.formTextInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
});
