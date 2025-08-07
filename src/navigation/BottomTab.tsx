import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import { handleSignOut } from '../utils/FirebaseAuth';
import {
  BottomTabParamList,
  BottomTabsProp
} from './type';
import HomeScreen from '../screens/app/bottom-tabs/HomeScreen';
import SearchScreen from '../screens/app/bottom-tabs/SearchScreen';
import WishlistScreen from '../screens/app/bottom-tabs/WishlistScreen';
import ProfileScreen from '../screens/app/bottom-tabs/ProfileScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  const handleLogoutPress = () => {
    handleSignOut();
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconPath;

          switch (route.name) {
            case 'Home':
              iconPath = focused
                ? require('../../src/assets/icons/Home-yellow.png')
                : require('../../src/assets/icons/Home.png');
              break;
            case 'Search':
              iconPath = focused
                ? require('../../src/assets/icons/Search-yellow.png')
                : require('../../src/assets/icons/Search.png');
              break;
            case 'Wishlist':
              iconPath = focused
                ? require('../../src/assets/icons/Bookmark-yellow.png')
                : require('../../src/assets/icons/Bookmark.png');
              break;
            case 'Profile':
              iconPath = focused
                ? require('../../src/assets/icons/Profile-yellow.png')
                : require('../../src/assets/icons/Profile.png');
              break;
          }

          return <Image source={iconPath} style={styles.icon} />;
        },

        tabBarStyle: {
          backgroundColor: '#001C29',
          borderTopWidth: 0,
        },

        headerStyle: {
          backgroundColor: '#002335',
          elevation: 0,
          borderBottomWidth: 0,
        },
        headerTitle: '',
        headerLeft: () => {
          if (route.name === 'Home') {
            return (
              <Image
                source={require('../../src/assets/LOGO.png')}
                style={{ width: 185, height: 45, resizeMode: 'contain' }}
              />
            );
          }
          return (
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 20 }}>
              {route.name}
            </Text>
          );
        },
        headerRight: () => {
          if (route.name === 'Profile') {
            return (
              <TouchableOpacity
                onPress={() => {
                  handleLogoutPress();
                }}
              >
                <Text style={styles.logoutBtn}>Logout</Text>
              </TouchableOpacity>
            );
          }
        },
        tabBarLabelStyle: {
          marginTop: 5,
        },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#FFB703',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  logoutBtn: {
    marginRight: 20,
    color: 'white',
    backgroundColor: '#FFB703',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 15,
  },
});

export default BottomTab;
