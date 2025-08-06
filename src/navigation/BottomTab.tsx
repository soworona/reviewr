import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './type';
import HomeScreen from '../screens/bottom-tabs/HomeScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
return(
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>

    </Tab.Navigator>
)
}