/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet } from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';

function App() {

  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
