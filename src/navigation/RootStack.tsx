import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import DetailsScreen from '../screens/app/DetailsScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import BottomTab from './BottomTab';
import { RootStackParamList } from './type';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack( ) {
    const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  
  function handleAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  
  useEffect(() => {
        const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
      return subscriber;
    }, []);
    
  if (initializing) return null;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      {!user?
      <>
      <Stack.Screen name="Login" component={LoginScreen}  />
      <Stack.Screen name="Signup" component={SignupScreen} />
      </>
      :<>
      <Stack.Screen name="App" component={BottomTab} />
      <Stack.Screen name='Details' component={DetailsScreen} />
      </>}
    </Stack.Navigator>
  );
}
