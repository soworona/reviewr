import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import InputComponent from '../componets/InputComponent';
import { BlurView } from '@react-native-community/blur';
import ButtonComponent from '../componets/ButtonComponent';

const LoginScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/BoyandHeron.jpg')}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <Image source={require('../assets/LOGO.png')} style={styles.logo} />

        <View style={styles.formContainer}>
          <BlurView
            style={{
              paddingHorizontal: 18,
              paddingVertical: 10,
            }}
            blurType="light"
            blurAmount={10}
            blurRadius={15}
          >
            <Text style={styles.heading}>Login</Text>
            <Text style={styles.subheading}>Please sign in to continue.</Text>

            <View style={{ gap: 10 }}>
              <InputComponent placeholder="Username" icon="user" />
              <InputComponent placeholder="Password" icon="lock" />
            </View>
            <Text style={styles.highlight}>Forgot Password?</Text>

            <ButtonComponent label="Login" />

            <Text style={styles.regularTxt}>
              Don't have an account? Please
              <Text style={{ color: '#FFB703' }}> Sign Up </Text>
              first.
            </Text>
          </BlurView>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#00233563',
    paddingHorizontal: 13,
    paddingVertical: 24,
    justifyContent: 'space-between',
  },
  logo: {
    width: 160,
    height: 48,
    resizeMode: 'contain',
  },
  formContainer: {
    backgroundColor: '#ffffff3f',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ffffff59',
  },
  heading: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 5,
  },
  subheading: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 20,
  },
  highlight: {
    fontWeight: 700,
    fontSize: 15,
    color: '#FFB703',
    marginTop: 19,
    marginBottom: 19,
    textAlign: 'right',
  },
  regularTxt: {
    fontWeight: 400,
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    marginTop:19,
    marginBottom:19
  },
});

export default LoginScreen;
