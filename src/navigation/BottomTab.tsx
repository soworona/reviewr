import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { fetchWishlist } from '../redux/slices/wishlistSlice';
import HomeScreen from '../screens/bottom-tabs/HomeScreen';
import ProfileScreen from '../screens/bottom-tabs/ProfileScreen';
import SearchScreen from '../screens/bottom-tabs/SearchScreen';
import WishlistScreen from '../screens/bottom-tabs/WishlistScreen';
import { handleSignOut } from '../utils/FirebaseAuth';
import { BottomTabParamList } from './type';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  const dispatch = useAppDispatch();

  const handleLogoutPress = () => {
    handleSignOut();
  };

  useEffect(() => {
    dispatch(fetchWishlist());
    console.log("fetch wishlist dispatched")
  }, [dispatch]);

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
        tabBarLabelStyle: {
          marginTop: 5,
        },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#FFB703',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerStyle: {
            backgroundColor: '#002335',
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTitle: '',
          headerLeft: () => {
            return (
              <Image
                source={require('../../src/assets/LOGO.png')}
                style={{ width: 185, height: 45, resizeMode: 'contain' }}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: '#002335',
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTitle: '',
          headerLeft: () => {
            return (
              <Text style={{ color: 'white', fontSize: 18, marginLeft: 20 }}>
                {route.name}
              </Text>
            );
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: '#002335',
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTitle: '',
          headerLeft: () => {
            return (
              <Text style={{ color: 'white', fontSize: 18, marginLeft: 20 }}>
                {route.name}
              </Text>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  handleLogoutPress();
                }}
              >
                <Text style={styles.logoutBtn}>Logout</Text>
              </TouchableOpacity>
            );
          },
        })}
      />
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
