import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import { RootStackParamList } from './type';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="App" component={BottomTab}  />
    </Stack.Navigator>
  );
}
