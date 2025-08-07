import { firebase, getAuth, signOut } from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

export async function handleSignUpWithEmail(
  email: string,
  password: string,
  username: string,
) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log('Signup success');
    return true;
  } catch (error: any) {
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
  }
}

export async function handleLoginWithEmail(email: string, password: string) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('sign in success');

    return true;
  } catch (error: any) {
    let message = 'Something went wrong';

    if (error.code === 'auth/invalid-email') {
      message = 'That email is invalid!';
    } else if (error.code === 'auth/user-not-found') {
      message = 'No account found with this email';
    } else if (error.code === 'auth/wrong-password') {
      message = 'Incorrect password';
    }
    console.log('error', message);
    return false;
  }
}

export async function handleSignOut() {
  try {
    await signOut(getAuth());
    Toast.show({
      type: 'success',
      text1: 'Goodbye!',
      text2: 'See you again!',
    });
  } catch (error:any) {
    Toast.show({
      type: 'error',
      text1: 'Sign out failed',
      text2: error.message,
    });
  }
}