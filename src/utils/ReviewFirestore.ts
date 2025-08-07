import { getAuth } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { AddReviewFirestoreParams } from '../types/Firestore';

const getUserId = () => {
  const uid = getAuth().currentUser?.uid;
  if (!uid) throw 'No user logged in';
  return uid;
};

export async function addReviewToFirestore(params: AddReviewFirestoreParams) {
  const uid = getUserId();
  try {
    const docRef = await firestore()
      .collection('reviews')
      .add({
        review: params.review,
        user_id: uid,
        movie_id: params.movie_id,
        created_at: firestore.FieldValue.serverTimestamp(),
      });

    console.log('Review added with ID: ', docRef.id);
    return docRef;
  } catch (error) {
    console.error('Error adding review: ', error);
    throw error;
  }
}