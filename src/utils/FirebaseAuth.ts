import { firebase } from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

export async function handleSignUpWithEmail(
  username: string,
  email: string,
  password: string,
) {
  try{
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log('Signup success');
    return true;
  }catch(error: any) {
      let message = 'Something went wrong';

      if (error.code === 'auth/email-already-in-use') {
        message = 'That email is already in use!';
      } else if (error.code === 'auth/invalid-email') {
        message = 'That email is invalid!';
      } else if (error.code === 'auth/weak-password') {
        message = 'Password should be at least 6 characters.';
      }

      console.log('error', message);
      return false;
    };
}
