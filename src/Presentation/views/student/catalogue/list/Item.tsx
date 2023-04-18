import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Category } from "../../../../../Domain/entities/Category";
import { StudentProductStackParamList } from "../../../../navigator/StudentProductNavigator";
import { useNavigation } from "@react-navigation/native";
import { StudentStackStackParamList } from "../../../../navigator/StudentStackNavigator";

interface Props {
  category: Category;
  height: number;
  width: number;
}

export const StudentCategoryItem = ({ category, height, width }: Props) => {
  const navigation =
    useNavigation<StackNavigationProp<StudentStackStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("StudentProductNavigator", {
          category: category,
        });
      }}
      style={{ ...styles.container, height: height, width: width }}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: category.image }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{category.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 18,
  },
  image: {
    flex: 1,
    //resizeMode: "contain",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleContainer: {
    height: 70,
    backgroundColor: "white",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
    shadoColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  title: {
    color: "black",
    fontSize: 25,
  },
});
