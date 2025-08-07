import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import BottomTab from './BottomTab';
import { RootStackParamList } from './type';
import DetailsScreen from '../screens/app/DetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen}  />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="App" component={BottomTab} />
      <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
  );
}
