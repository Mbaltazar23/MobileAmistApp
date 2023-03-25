import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { StudentBannerListScreen } from '../views/student/banner/list/BannerList';
import { StudentCatalogueListScreen } from '../views/student/catalogue/list/CatalogueList';

const Tab = createBottomTabNavigator();

export const StudentTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StudentBannerListScreen" component={StudentBannerListScreen} />

      <Tab.Screen name="StudentCatalogueListScreen" component={StudentCatalogueListScreen} />
      <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}