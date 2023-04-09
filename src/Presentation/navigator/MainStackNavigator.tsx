import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../views/home/Home";
import { ResetPasswordScreen } from "../views/password/ResetPassword";
import { ChangePasswordScreen } from "../views/reset/ChangePassword";
import { TeacherTabsNavigator } from "./TeacherTabsNavigator";
import { StudentTabsNavigator } from "./StudentTabsNavigator";
import { User } from "../../Domain/entities/User";
import { ProfileUpdateScreen } from "../views/profile/update/ProfileUpdate";
import { UserProvider } from "../context/UserContext";

export type RootStackParamList = {
  HomeScreen: undefined;
  ResetPasswordScreen: undefined;
  ChangePasswordScreen: undefined;
  StudentTabsNavigator: undefined;
  TeacherTabsNavigator: undefined;
  ProfileUpdateScreen: { user: User };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  return (
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
  );
};

const UserState = ({ children }: any) => {
  return <UserProvider>{children}</UserProvider>;
};
