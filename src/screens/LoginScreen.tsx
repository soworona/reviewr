import { ImageBackground, StyleSheet, View } from 'react-native';

const LoginScreen = () => {
  return (
    <ImageBackground
      source={require('../asssets/BoyandHeron.jpg')}
      style={styles.bgImage}
    >
        <View style={styles.container}>

        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0023355e'
  },
  bgImage: {
    flex: 1,
  },
});

export default LoginScreen;
