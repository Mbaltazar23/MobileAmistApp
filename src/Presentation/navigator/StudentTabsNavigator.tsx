import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { ProfileInfoScreen } from "../views/profile/info/ProfileInfo";
import { StudentBannerListScreen } from "../views/student/banner/list/BannerList";
import { StudentCatalogueListScreen } from "../views/student/catalogue/list/CatalogueList";

const Tab = createBottomTabNavigator();

export const StudentTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="StudentBannerListScreen"
        component={StudentBannerListScreen}
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
        name="StudentCatalogueListScreen"
        component={StudentCatalogueListScreen}
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
