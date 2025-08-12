import { useCallback, useEffect, useState } from 'react';
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
import { RootStackScreenProp } from '../navigation/type';
import { Movie } from '../types/Movies';
import { AxiosInstance } from '../utils/Axios';
import { getAllReviews } from '../utils/ReviewFirestore';
import formatDate from '../utils/FormatDate';
import SmallButtonComponent from '../componets/SmallButtonComponent';
import Toast from 'react-native-toast-message';
import { addToWatchList } from '../utils/MovieService';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addToWishlist } from '../redux/slices/wishlistSlice';

const DetailsScreen = ({
  route,
  navigation,
}: RootStackScreenProp<'Details'>) => {
  const id = route.params.movie_id;
  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReview] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const isInWishlist = useAppSelector(state =>
    state.wishlist.moviesIds.includes(id),
  );
  const dispatch = useAppDispatch();

  console.log('in wishlist state:', isInWishlist);

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
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <ActivityIndicator size="large" color="#ffffffac" />
      </View>
    );
  }
  const handleAddReviewPress = () => {
    navigation.navigate('AddReview', { movie_id: id });
  };

  const handleToggleWishlistPress = () => {
    // const addToWishList = await addToWatchList(id, !inWishlist)
   if(!isInWishlist){
    dispatch(addToWishlist({ movieId: id}))
   }

    Toast.show({
      type: 'success',
      text1: 'Added to wishlist',
      text2: 'Your wishlist has been updated.',
    });

    // setInWishlist(!inWishlist);
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
              style={styles.banner}
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={navigation.goBack}
              style={{ position: 'absolute', top: 10 }}
            >
              <Image
                source={require('../../src/assets/icons/Back.png')}
                style={{ height: 25, objectFit: 'contain' }}
              />
            </TouchableOpacity>
            <View style={styles.posterContainer}>
              <FastImage
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
                style={styles.poster}
                resizeMode="contain"
              />
            </View>
            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>{movie.title}</Text>
              <Text style={styles.headerSubTitle}>
                <Image
                  source={require('../../src/assets/icons/Director.png')}
                  style={styles.headerIcon}
                />{' '}
                Directed by Alfonso Cuarón
              </Text>
              <Text style={styles.headerSubTitle}>
                <Image
                  source={require('../../src/assets/icons/Person.png')}
                  style={styles.headerIcon}
                />{' '}
                Warner Bros. Pictures
              </Text>
            </View>
            <View style={styles.headerBottom}>
              <Text style={styles.headerSubTitle}>
                <Image
                  source={require('../../src/assets/icons/Time.png')}
                  style={styles.headerIcon}
                />{' '}
                2hr 30 min
              </Text>
              <Text style={styles.headerSubTitle}>
                <Image
                  source={require('../../src/assets/icons/Date.png')}
                  style={styles.headerIcon}
                />
                {formatDate(movie.release_date)}
              </Text>
              <Text style={styles.headerSubTitle}>
                <Image
                  source={require('../../src/assets/icons/Watchlist.png')}
                  style={styles.headerIcon}
                />{' '}
                Not watched
              </Text>
            </View>
          </View>
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
  header: {
    backgroundColor: '#4a5e68ff',
    paddingHorizontal: 8,
    borderRadius: 14,
    // marginBottom: 16,
    borderWidth: 1,
    borderColor: '#817f8d33',
    paddingVertical: 8,
    elevation: 5,
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 6,
  },
  posterContainer: {
    position: 'absolute',
    height: 163,
    width: 106,
    elevation: 6,
    left: 20,
    top: 50,
  },
  poster: {
    height: '100%',
    width: '100%',
    borderRadius: 14,
  },
  headerInfo: {
    left: 125,
    width: 205,
    gap: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  headerSubTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffffbf',
  },
  headerIcon: {
    height: 10,
    width: 12,
    objectFit: 'contain',
  },
  headerBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
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
