import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AxiosInstance } from '../utils/Axios';
import { RootStackScreenProp } from '../navigation/type';
import { Movie } from '../types/Movies';
import ButtonComponent from '../componets/ButtonComponent';
import { addReviewToFirestore } from '../utils/ReviewFirestore';

const AddReviewScreen = ({
  route,
  navigation,
}: RootStackScreenProp<'AddReview'>) => {
  const id = route.params.movie_id;
  const [movie, setMovie] = useState<Movie>();
  const [review, setReview] = useState('');

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await AxiosInstance.get(`${id}?language=en-US`);
        setMovie(response.data);
      } catch (error) {
        console.error('Failed to fetch movie details', error);
      }
    };

    getMovieDetails();
  }, [id]);

  const handlePublishBtnPress = async () => {
    await addReviewToFirestore({ review: review, movie_id: id });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {movie && (
        <>
          <Text style={{ color: 'white' }}>{movie.title}</Text>
          <TextInput
            style={styles.input}
            placeholder="Write down your review..."
            placeholderTextColor={'#FFFFFF80'}
            numberOfLines={30}
            multiline={true}
            verticalAlign="top"
            value={review}
            onChangeText={setReview}
          />
          <ButtonComponent label="Publish" onPress={handlePublishBtnPress} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#052433ff',
    padding: 16,
  },
  input: {
    backgroundColor: '#39596A',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF33',
    height: 360,
    textAlignVertical: 'top',
    paddingHorizontal: 21,
    paddingVertical: 33,
  },
});

export default AddReviewScreen;
