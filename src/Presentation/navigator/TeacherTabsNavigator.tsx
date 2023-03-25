import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
      />

      <Tab.Screen
        name="TeacherStudentsListScreen"
        component={TeacherStudentsListScreen}
      />
      <Tab.Screen
        name="ProfileInfoScreen"
        component={ProfileInfoScreen}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
