/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/RootStack';
import Toast from 'react-native-toast-message';
import AppStack from './src/navigation/AppStack';
import RootStack from './src/navigation/RootStack';

function App() {
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
    <NavigationContainer key={user? 'app' : 'auth'}>
      <RootStack/> 
      <Toast />
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

