import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import useViewModel from "./ViewModel";
import { FlatList, View } from "react-native";
import { StudentProductItem } from "./Item";
import { StudentProductStackParamList } from "../../../../navigator/StudentProductNavigator";

interface Props
  extends StackScreenProps<
    StudentProductStackParamList,
    "StudentProductListScreen"
  > {}

export const StudentProductListScreen = ({ navigation, route }: Props) => {
  const { category } = route.params;
  const { products, getProducts } = useViewModel();

  useEffect(() => {
    if (category.id !== undefined) {
      getProducts(category.id!);
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <StudentProductItem product={item} navigation={navigation} />
        )}
      />
    </View>
  );
};
