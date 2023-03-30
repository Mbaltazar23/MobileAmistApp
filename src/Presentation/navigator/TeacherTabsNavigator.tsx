import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { ProfileInfoScreen } from "../views/profile/info/ProfileInfo";
import { TeacherBannerListScreen } from "../views/teacher/banner/list/BannerList";
import { TeacherStudentsListScreen } from "../views/teacher/students/list/StudentsList";

const Tab = createBottomTabNavigator();

export const TeacherTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TeacherBannerListScreen"
        component={TeacherBannerListScreen}
        options={{
          title: "AmistApp ",
          tabBarLabel: "AmistApp",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/list.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="TeacherStudentsListScreen"
        component={TeacherStudentsListScreen}
        options={{
          title: "Catalogo",
          tabBarLabel: "Catalogo",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/catalog.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileInfoScreen"
        component={ProfileInfoScreen}
        options={{
          title: "Perfil",
          tabBarLabel: "Perfil",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/user_menu.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
