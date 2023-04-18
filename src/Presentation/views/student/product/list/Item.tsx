import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Product } from "../../../../../Domain/entities/Product";
import { StudentProductStackParamList } from "../../../../navigator/StudentProductNavigator";

interface Props {
  product: Product;
  navigation: StackNavigationProp<
  StudentProductStackParamList,
    "StudentProductListScreen",
    undefined
  >;
}

export const StudentProductItem = ({ product, navigation }: Props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("StudentProductDetailScreen", { product: product })
      }
    >
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.description}>Stock : {product.stock}</Text>
          <Text style={styles.price}>Puntos : {product.points}</Text>
        </View>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>
      <View style={styles.divider}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 90,
    //marginHorizontal: 20,
    paddingHorizontal: 20,
    marginTop: 10,
    paddingTop: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    color: "black",
    fontSize: 15,
  },
  description: {
    color: "gray",
    fontSize: 12,
    marginTop: 3,
  },
  price: {
    color: "green",
    fontSize: 12,
    fontWeight: "bold",
  },
  actionContainer: {
    marginRight: 40,
  },
  actionImage: {
    width: 25,
    height: 25,
    marginVertical: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#f2f2f2",
    marginHorizontal: 30,
    flex: 1,
  },
});
