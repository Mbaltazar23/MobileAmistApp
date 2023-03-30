import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Presentation/views/home/Home";
import { ResetPasswordScreen } from "./src/Presentation/views/password/ResetPassword";
import { ChangePasswordScreen } from "./src/Presentation/views/reset/ChangePassword";
import { TeacherTabsNavigator } from "./src/Presentation/navigator/TeacherTabsNavigator";
import { StudentTabsNavigator } from "./src/Presentation/navigator/StudentTabsNavigator";
import { User } from "./src/Domain/entities/User";
import { ProfileUpdateScreen } from "./src/Presentation/views/profile/update/ProfileUpdate";
import { UserProvider } from "./src/Presentation/context/UserContext";

export type RootStackParamList = {
  HomeScreen: undefined;
  ResetPasswordScreen: undefined;
  ChangePasswordScreen: undefined;
  StudentTabsNavigator: undefined;
  TeacherTabsNavigator: undefined;
  ProfileUpdateScreen: { user: User };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <UserState>
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
          <Stack.Screen
            name="ProfileUpdateScreen"
            component={ProfileUpdateScreen}
            options={{
              headerShown: true,
              title: "Actualizar usuario",
            }}
          />
        </Stack.Navigator>
      </UserState>
    </NavigationContainer>
  );
};

const UserState = ({ children }: any) => {
  return <UserProvider>{children}</UserProvider>;
};

export default App;
