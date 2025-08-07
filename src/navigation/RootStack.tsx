import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTab from './BottomTab';
import { RootStackParamList } from './type';
import SignupScreen from '../screens/SignupScreen';
import AddReviewScreen from '../screens/AddReviewScreen';

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
      <Stack.Screen name='AddReview' component={AddReviewScreen} />
      </>}
    </Stack.Navigator>
  );
}
