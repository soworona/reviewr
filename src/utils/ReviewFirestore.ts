import { getAuth } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { AddReviewFirestoreParams } from '../types/Firestore';
import Toast from 'react-native-toast-message';

const getUserId = () => {
  const uid = getAuth().currentUser?.uid;
  if (!uid) throw 'No user logged in';
  return uid;
};

export async function addReviewToFirestore(params: AddReviewFirestoreParams) {
  const uid = getUserId();
  try {
    const docRef = await firestore().collection('reviews').add({
      review: params.review,
      user_id: uid,
      movie_id: params.movie_id,
      created_at: firestore.FieldValue.serverTimestamp(),
    });

    Toast.show({
      type: 'success',
      text1: 'Success!',
      text2: 'Your review has been added!',
    });
    return docRef;
  } catch (error) {
    Toast.show({
      type: 'erroe',
      text1: 'Something went wrong!',
      text2: 'Try again!',
    });
    console.error('Error adding review: ', error);
    throw error;
  }
}

export async function getAllReviews(movie_id:number) {
  const docRef = await firestore()
  .collection('reviews')
  .where('movie_id','==',movie_id)
  .get();

  const reviews = docRef.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return reviews;
}
