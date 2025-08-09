import { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AxiosInstance } from '../utils/Axios';
import { RootStackScreenProp } from '../navigation/type';
import { Movie } from '../types/Movies';
import ButtonComponent from '../componets/ButtonComponent';
import { addReviewToFirestore } from '../utils/ReviewFirestore';
import FastImage from 'react-native-fast-image';

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
        const response = await AxiosInstance.get(`/movie/${id}?language=en-US`);
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                paddingTop: 20,
                gap: 40,
                height: '100%',
              }}
            >
              <TouchableOpacity
                onPress={navigation.goBack}
              >
                <Image
                  source={require('../../src/assets/icons/Back.png')}
                  style={{ height: 30, objectFit: 'contain' }}
                />
              </TouchableOpacity>
              <Text style={{ color: 'white', fontSize: 16 }}>
                {movie.title}
              </Text>
            </View>
            <View style={styles.posterContainer}>
              <FastImage
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
                style={styles.poster}
                resizeMode="contain"
              />
            </View>
          </View>
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
    paddingHorizontal: 21,
    paddingTop: 45,
    gap: 16,
  },
  posterContainer: {
    height: 188,
    width: 122,
    elevation: 6,
  },
  poster: {
    height: '100%',
    width: '100%',
    borderRadius: 14,
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
