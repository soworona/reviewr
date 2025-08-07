/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import RootStack from './src/navigation/RootStack';

function App() {

  return (
    <NavigationContainer >
      <RootStack /> 
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

