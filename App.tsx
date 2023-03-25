import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Presentation/views/home/Home";
import { ResetPasswordScreen } from "./src/Presentation/views/password/ResetPassword";
import { ChangePasswordScreen } from "./src/Presentation/views/reset/ChangePassword";
import { TeacherTabsNavigator } from "./src/Presentation/navigator/TeacherTabsNavigator";
import { StudentTabsNavigator } from "./src/Presentation/navigator/StudentTabsNavigator";

export type RootStackParamList = {
  HomeScreen: undefined;
  ResetPasswordScreen: undefined;
  ChangePasswordScreen: undefined;
  StudentTabsNavigator: undefined;
  TeacherTabsNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{
            headerShown: false,
            title: "Recuperar Password",
          }}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={{
            headerShown: false,
            title: "Resetear Password",
          }}
        />
        <Stack.Screen
          name="StudentTabsNavigator"
          component={StudentTabsNavigator}
        />
        <Stack.Screen
          name="TeacherTabsNavigator"
          component={TeacherTabsNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
