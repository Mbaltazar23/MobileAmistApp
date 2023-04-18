import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StudentCatalogueListScreen } from "../views/student/catalogue/list/CatalogueList";
import { CategoryProvider } from "../context/CategoryContext";
import { Category } from "../../Domain/entities/Category";
import { StudentProductNavigator } from "./StudentProductNavigator";

export type StudentStackStackParamList = {
  StudentCatalogueListScreen: undefined;
  StudentProductNavigator: { category: Category };
};

const Stack = createNativeStackNavigator<StudentStackStackParamList>();

export const StudentStackNavigator = () => {
  return (
    <CategoryState>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="StudentCatalogueListScreen"
          component={StudentCatalogueListScreen}
          options={{
            title: "Catalogo",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="StudentProductNavigator"
          component={StudentProductNavigator}
        />
      </Stack.Navigator>
    </CategoryState>
  );
};

const CategoryState = ({ children }: any) => {
  return <CategoryProvider>{children}</CategoryProvider>;
};
