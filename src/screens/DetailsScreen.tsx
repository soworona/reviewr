import { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import ButtonComponent from '../componets/ButtonComponent';
import { RootStackScreenProp } from '../navigation/type';
import { Movie } from '../types/Movies';
import { AxiosInstance } from '../utils/Axios';
import { getAllReviews } from '../utils/ReviewFirestore';

const DetailsScreen = ({
  route,
  navigation,
}: RootStackScreenProp<'Details'>) => {
  const id = route.params.movie_id;
  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReview] = useState<any[]>([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await AxiosInstance.get(`movie/${id}?language=en-US`);
        setMovie(response.data);
        console.log('details', response.data);
      } catch (error) {
        console.error('Failed to fetch movie details', error);
      }
    };

    const getReviews = async () => {
      const reviewsList = await getAllReviews(id);
      setReview(reviewsList);
    };

    getMovieDetails();
    getReviews();
  }, [id]);

  const handleAddReviewPress = () => {
    navigation.navigate('AddReview', { movie_id: id });
  };

  return (
    <View style={styles.container}>
      {movie && (
        <>
          <View style={styles.header}>
            <FastImage
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
              }}
              style={{
                width: '100%',
                height: 200,
                borderRadius: 10,
                marginBottom: 10,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              {movie.title}
            </Text>
            <Text>{movie.overview}</Text>
          </View>
          <TouchableOpacity style={{ borderWidth: 1 , backgroundColor:'yellow'}}>
            <Text style={styles.txt}> Add to wishlist</Text>
          </TouchableOpacity>
          <ButtonComponent label="Add review" onPress={handleAddReviewPress} />

          <Text style={styles.txt}>Your reviews</Text>

          <FlatList
            data={reviews}
            keyExtractor={(item, index) => item.id || index.toString()}
            renderItem={({ item }: { item: any }) => (
              <View style={styles.reviewItem}>
                <Text style={styles.reviewUser}>{item.user_id}</Text>
                <Text style={styles.reviewContent}>{item.review}</Text>
              </View>
            )}
            ListEmptyComponent={
              <Text style={{ color: 'white', marginTop: 10 }}>
                No reviews yet.
              </Text>
            }
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#052433ff',
    paddingHorizontal: 16,
    paddingTop: 45,
  },
  header: {
    backgroundColor: '#5F6F78',
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
  },
  txt: {
    color: 'white',
    fontSize: 18,
    marginTop: 16,
    marginBottom: 8,
  },
  reviewItem: {
    backgroundColor: '#1E2A38',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  reviewUser: {
    color: '#a0c4ff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewContent: {
    color: 'white',
  },
});

export default DetailsScreen;
