import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import InputComponent from '../componets/InputComponent';
import { BlurView } from '@react-native-community/blur';
import ButtonComponent from '../componets/ButtonComponent';
import styles from './style/styles';
import { RootStackScreenProp } from '../navigation/type';

const LoginScreen = ({ navigation }: RootStackScreenProp<'Login'>) => {
  return (
    <ImageBackground
      source={require('../assets/BoyandHeron.jpg')}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <Image source={require('../assets/LOGO.png')} style={styles.logo} />

        <View style={styles.formContainer}>
          {/* <BlurView
            style={{
              paddingHorizontal: 18,
              paddingVertical: 10,
            }}
            blurType="light"
            blurAmount={10}
            blurRadius={15}
          > */}
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
              <Text
                style={{ color: '#FFB703' }}
                onPress={() => {
                  navigation.navigate('Signup');
                }}
              >
                {' '}
                Sign Up{' '}
              </Text>
              first.
            </Text>
          {/* </BlurView> */}
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
