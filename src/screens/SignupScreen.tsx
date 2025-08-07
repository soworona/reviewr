import { useState } from 'react';
import {
  Image,
  ImageBackground,
  View
} from 'react-native';
import Toast from 'react-native-toast-message';

import styles from './style/styles';
import { RootStackScreenProp } from '../navigation/type';
import { handleSignUpWithEmail } from '../utils/FirebaseAuth';
import AuthFormComponent from '../componets/AuthFormComponent';

const SignupScreen = ({ navigation }: RootStackScreenProp<'Signup'>) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupPress = async (
    email: string,
    password: string,
    username: string,
  ) => {
    const success = await handleSignUpWithEmail( email, password, username);
    if (success) {
      Toast.show({
        type: 'success',
        text1: 'Congrats!',
        text2: 'Your account was created',
        position: 'top',
      });

      navigation.goBack();
    }
    else{
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
      source={require('../../assets/If.jpg')}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <Image source={require('../../assets/LOGO.png')} style={styles.logo} />


        <AuthFormComponent
          formType="signup"
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={() => handleSignupPress(username, email, password)}
        />
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;
