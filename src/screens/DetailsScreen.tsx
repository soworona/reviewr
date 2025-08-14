import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import ButtonComponent from '../componets/ButtonComponent';
import SmallButtonComponent from '../componets/SmallButtonComponent';
import { RootStackScreenProp } from '../navigation/type';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  addToWishlist,
  removeFromWishlist,
} from '../redux/slices/wishlistSlice';
import { Movie } from '../types/Movies';
import { AxiosInstance } from '../utils/Axios';
import formatDate from '../utils/FormatDate';
import { addOrRemoveWishList } from '../utils/MovieService';
import { getAllReviews } from '../utils/ReviewFirestore';
import LoadingSpinnerComponent from './bottom-tabs/LoadingSpinnerComponent';
import HeaderComponent from '../componets/HeaderComponent';

const DetailsScreen = ({
  route,
  navigation,
}: RootStackScreenProp<'Details'>) => {
  const id = route.params.movie_id;
  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReview] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();
  const movieIds = useAppSelector(state => state.wishlist.movieIds);
  const status = useAppSelector(state => state.wishlist.status);
  const isInWishlist = movieIds.includes(id);

  console.log('isInWishlist:', isInWishlist);

  if (status === 'pending') {
    return <LoadingSpinnerComponent />;
  }

  if (status === 'failed') {
    return <Text>Error</Text>;
  }

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await AxiosInstance.get(`movie/${id}?language=en-US`);
        setMovie(response.data);
      } catch (error) {
        console.error('Failed to fetch movie details', error);
      }
      setLoading(false);
    };

    const getReviews = async () => {
      setLoading(true);
      const reviewsList = await getAllReviews(id);
      setReview(reviewsList);
      setLoading(false);
    };

    getMovieDetails();
    getReviews();
  }, [id]);

  if (loading) {
    return <LoadingSpinnerComponent />;
  }

  const handleAddReviewPress = () => {
    navigation.navigate('AddReview', { movie_id: id });
  };

  const handleToggleWishlistPress = async () => {
    if (!isInWishlist) {
      dispatch(addToWishlist({ movieId: id }));
      await addOrRemoveWishList(id, true);
    } else {
      dispatch(removeFromWishlist({ movieId: id }));
      await addOrRemoveWishList(id, false);
    }
  };

  return (
    <View style={styles.container}>
      {movie && (
        <>
          <HeaderComponent
            movie={movie}
            onBack={navigation.goBack}
          />
          <View style={styles.btnGrp}>
            <SmallButtonComponent label="Watch trailer" utube />
            <SmallButtonComponent
              label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              onPress={handleToggleWishlistPress}
              watchlist
            />
          </View>
          <Text style={styles.overview}>{movie.overview}</Text>

          <ButtonComponent label="Add review" onPress={handleAddReviewPress} />

          <Text style={styles.txt}>Reviews</Text>
          <FlatList
            data={reviews}
            keyExtractor={(item, index) => item.id || index.toString()}
            renderItem={({ item }: { item: any }) => (
              <View style={styles.reviewItem}>
                <Text style={styles.reviewUser}>Review by {item.user_id}</Text>
                <Text style={styles.reviewContent}>{item.review}</Text>
              </View>
            )}
            ListEmptyComponent={
              <Text style={{ color: 'white' }}>No reviews yet.</Text>
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
    gap: 16,
  },
  btnGrp: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  overview: {
    color: '#F5F5F5',
    fontSize: 14,
  },
  txt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
  },
  reviewItem: {
    backgroundColor: '#37505D',
    padding: 12,
    borderRadius: 14,
    marginBottom: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: '#ffffff1a',
    elevation: 2,
  },
  reviewUser: {
    color: '#ffffff80',
    fontWeight: 300,
    fontSize: 11,
  },
  reviewContent: {
    color: '#F5F5F5',
    fontSize: 14,
  },
});

export default DetailsScreen;
