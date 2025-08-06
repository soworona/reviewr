import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './type';
import HomeScreen from '../screens/bottom-tabs/HomeScreen';
import ProfileScreen from '../screens/bottom-tabs/ProfileScreen';
import SearchScreen from '../screens/bottom-tabs/SearchScreen';
import WishlistScreen from '../screens/bottom-tabs/WishlistScreen';
import Octicons  from '@react-native-vector-icons/octicons';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={({route}) =>({
              tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
          }else if (route.name === 'Search'){
            iconName = 'search'
          }else if ( route.name === 'Profile'){
            iconName = 'profile'
          }else {
            iconName = 'book-outline'
          }

          return <MaterialDesignIcons name={iconName} size={size} color={color} />;
        },
        tabBarStyle:{
            backgroundColor:'#001C29',
            height:70
        },
        tabBarInactiveTintColor:'white',
        tabBarActiveTintColor:'#FFB703'
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTab;
