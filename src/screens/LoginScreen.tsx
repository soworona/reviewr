import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
import ButtonComponent from '../componets/ButtonComponent';
import InputComponent from '../componets/InputComponent';
import { RootStackScreenProp } from '../navigation/type';
import styles from './style/styles';
import { useState } from 'react';
import { handleLoginWithEmail } from '../utils/FirebaseAuth';

const LoginScreen = ({ navigation }: RootStackScreenProp<'Login'>) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = async (email: string, password: string) => {
    const success = await handleLoginWithEmail(email, password);
    if(success)
    {
      navigation.navigate('Home')
    }
  }

  return (
    <ImageBackground
      source={require('../assets/BoyandHeron.jpg')}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <Image source={require('../assets/LOGO.png')} style={styles.logo} />

        <KeyboardAvoidingView behavior={'padding'} style={styles.formContainer}>
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
            <InputComponent
              placeholder="Username"
              icon="user"
              value={email}
              onChangeText={setEmail}
            />
            <InputComponent
              placeholder="Password"
              icon="lock"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <Text style={styles.highlight}>Forgot Password?</Text>

          <ButtonComponent label="Login" onPress={() => handleLoginPress(email, password)} />

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
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
