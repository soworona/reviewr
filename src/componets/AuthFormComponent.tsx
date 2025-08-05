import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AuthFormComponentProps = {
  formType: 'login' | 'signup';
  username?: string;
  setUsername?: (text: string) => void;
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  onSubmit: (email: string, password: string, username?: string) => void;
};
const AuthFormComponent = (props: AuthFormComponentProps) => {
  const isLogin = props.formType == 'login' ? true : false;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
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
      <Text style={styles.heading}>{isLogin ? 'Login' : 'Sign up'}</Text>
      <Text style={styles.subheading}>
        {isLogin
          ? 'Please sign in to continue.'
          : 'Create an account to continue.'}
      </Text>

      <View style={{ gap: 10 }}>
        {isLogin && (
          <>
            <InputComponent
              placeholder="Username"
              icon="user"
              value={props.email}
              onChangeText={props.setEmail}
            />
            <InputComponent
              placeholder="Password"
              icon="lock"
              value={props.password}
              onChangeText={props.setPassword}
              secureTextEntry
            />
          </>
        )}
        {!isLogin && (
          <>
            <InputComponent
              placeholder="Username"
              icon="user"
              value={props.username || ''}
              onChangeText={props.setUsername || (() => {})}
            />
            <InputComponent
              placeholder="Email"
              icon="email"
              value={props.email}
              onChangeText={props.setEmail}
            />
            <InputComponent
              placeholder="Password"
              icon="lock"
              value={props.password}
              onChangeText={props.setPassword}
              secureTextEntry
            />
          </>
        )}
      </View>
      {isLogin && <Text style={styles.highlight}>Forgot Password?</Text>}
      {!isLogin && <View style={{ paddingVertical: 12 }} />}
      <ButtonComponent
        label={isLogin ? 'Login' : 'Sign Up'}
        onPress={() =>
          props.onSubmit(props.email, props.password, props.username)
        }
      />

      <Text style={styles.regularTxt}>
        {isLogin
          ? "Don't have an account?"
          : 'Already have an account? Go to the'}
        <Text
          style={{ color: '#FFB703' }}
          onPress={() => navigation.navigate(isLogin ? 'Signup' : 'Login')}
        >
          {' '}
          {isLogin ? 'Sign Up' : 'Login Page'}
        </Text>
        {isLogin && ' first.'}
      </Text>
      {/* </BlurView> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#ffffff69',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ffffff59',
    overflow: 'hidden',
    paddingHorizontal: 18,
    paddingVertical: 10,
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
    marginTop: 19,
    marginBottom: 19,
  },
});

export default AuthFormComponent;
