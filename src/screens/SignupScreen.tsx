import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import InputComponent from '../componets/InputComponent';
import { BlurView } from '@react-native-community/blur';
import ButtonComponent from '../componets/ButtonComponent';
import styles from './style/styles';
import { RootStackScreenProp } from '../navigation/type';

const SignupScreen = ({navigation}: RootStackScreenProp<'Signup'>) => {
  return (
    <ImageBackground
      source={require('../assets/If.jpg')}
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
            <Text style={styles.heading}>Sign up</Text>
            <Text style={styles.subheading}>
              Create an account to continue.
            </Text>

            <View style={{ gap: 10, marginBottom:19 }}>
              <InputComponent placeholder="Username" icon="user" />
              <InputComponent placeholder="Email" icon="email" />
              <InputComponent placeholder="Password" icon="lock" />
            </View>

            <ButtonComponent label="Sign Up" />

            <Text style={styles.regularTxt}>
              Already have an account? Go to the
              <Text style={{ color: '#FFB703' }} 
                              onPress={() => {
                  navigation.navigate('Login');
                }}> Login Page</Text>
            </Text>
          {/* </BlurView> */}
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;
