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
import { handleSignUpWithEmail } from '../utils/FirebaseAuth';

const SignupScreen = ({ navigation }: RootStackScreenProp<'Signup'>) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSignupPress = async (username:string, email:string, password:string) => {
    const success = await handleSignUpWithEmail(username, email, password)
    if(success){
      navigation.navigate('Login')

    }
  }

  return (
    <ImageBackground
      source={require('../assets/If.jpg')}
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
          <Text style={styles.heading}>Sign up</Text>
          <Text style={styles.subheading}>Create an account to continue.</Text>

          <View style={{ gap: 10, marginBottom: 19 }}>
            <InputComponent placeholder="Username" icon="user" value={username} onChangeText={setUsername}/>
            <InputComponent placeholder="Email" icon="email" value={email} onChangeText={setEmail}/>
            <InputComponent placeholder="Password" icon="lock" value={password} onChangeText={setPassword} secureTextEntry/>
          </View>

          <ButtonComponent label="Sign Up" onPress={() => handleSignupPress(username, email, password)}/>

          <Text style={styles.regularTxt}>
            Already have an account? Go to the
            <Text
              style={{ color: '#FFB703' }}
              onPress={() => {
                navigation.navigate('Login');
              }}
            > Login Page
            </Text>
          </Text>
          {/* </BlurView> */}
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;
