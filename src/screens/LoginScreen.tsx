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
import Toast from 'react-native-toast-message';
import AuthFormComponent from '../componets/AuthFormComponent';

const LoginScreen = ({ navigation }: RootStackScreenProp<'Login'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = async (email: string, password: string) => {
    const success = await handleLoginWithEmail(email, password);
    if (success) {
      Toast.show({
        type: 'success',
        text1: 'Congrats!',
        text2: 'You have successfully logged in!',
        position: 'top',
      });

      navigation.navigate('Home');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Try again.',
        position: 'top',
      });
    }
  };

  return (
    <ImageBackground
      source={require('../assets/BoyandHeron.jpg')}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <Image source={require('../assets/LOGO.png')} style={styles.logo} />

        <AuthFormComponent
          formType="login"
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={() => handleLoginPress(email, password)}
        />
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
