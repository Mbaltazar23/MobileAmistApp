import React from "react";
import { Product } from "../../Domain/entities/Product";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StudentProductListScreen } from "../views/student/product/list/ProductList";
import { StudentProductDetailScreen } from "../views/student/product/detail/ProductDetail";
import { Category } from "../../Domain/entities/Category";
import { ProductProvider } from "../context/ProductContext";
import { StudentStackStackParamList } from "./StudentStackNavigator";
import { StackScreenProps } from "@react-navigation/stack";

export type StudentProductStackParamList = {
  StudentProductListScreen: { category: Category };
  StudentProductDetailScreen: { product: Product };
};

const Stack = createNativeStackNavigator<StudentProductStackParamList>();

interface Props
  extends StackScreenProps<
    StudentStackStackParamList,
    "StudentProductNavigator"
  > {}

export const StudentProductNavigator = ({ navigation, route }: Props) => {
  return (
    <ProductState>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="StudentProductListScreen"
          component={StudentProductListScreen}
          initialParams={{ category: route.params.category }}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: "Productos disponibles",
          })}
        />
        <Stack.Screen
          name="StudentProductDetailScreen"
          component={StudentProductDetailScreen}
        />
      </Stack.Navigator>
    </ProductState>
  );
};

const ProductState = ({ children }: any) => {
  return <ProductProvider>{children}</ProductProvider>;
};
