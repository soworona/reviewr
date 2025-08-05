import { firebase } from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

export async function handleSignUpWithEmail(
  username: string,
  email: string,
  password: string,
) {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      Toast.show({
        type: 'success',
        text1: 'Welcome back!',
        text2: 'Successfully signed in.',
      });
    })
    .catch(err => {
      let message = 'Something went wrong';
      if (err.code === 'auth/invalid-email') {
        message = 'That email is invalid!';
      } else if (err.code === 'auth/user-not-found') {
        message = 'No account found with this email';
      } else if (err.code === 'auth/wrong-password') {
        message = 'Incorrect password';
      }

      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: message,
      });
    });
}
