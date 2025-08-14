import { FlatList, Image, ScrollView, ScrollViewBase, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from '../../componets/HeaderComponent';
import { BottomTabsProp } from '../../navigation/type';
import { useEffect, useState } from 'react';
import { Movie } from '../../types/Movies';
import { useAppSelector } from '../../redux/hooks';
import { getMovieList } from '../../utils/MovieService';
import FastImage from 'react-native-fast-image';
import { getUserReviews } from '../../utils/ReviewFirestore';
import { Review } from '../../types/Review';

const ProfileScreen = ({ navigation }: BottomTabsProp<'Profile'>) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const movieIds = useAppSelector(state => state.wishlist.movieIds);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (movieIds.length === 0) {
      setMovies([]);
      return;
    }
    const fetchMovieDetail = async () => {
      const path = `account/22105497/watchlist/movies`;
      const data = await getMovieList(path);
      setMovies(data);
    };
    fetchMovieDetail();
  }, [movieIds]);

  useEffect(() => {
     const fetchReviews = async () => {
          const userReviews = await getUserReviews();
          setReviews(userReviews);
          console.log('reviews: ', userReviews)
        };
    fetchReviews();
  }, []);

  const renderWishlistItem = (item: Movie, index: number) => (
    <View style={styles.row}>
      <Text style={styles.rank}>{index + 1}</Text>
      <View style={styles.movieInfo}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>

        <Text style={styles.rating}>
          <FastImage
            source={require('../../assets/icons//Star.png')}
            style={styles.icon}
          />{' '}
          {Math.round((item.vote_average / 2) * 10) / 10}
        </Text>
      </View>
      <FastImage
        source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
        style={styles.poster}
      />
    </View>
  );


  return (
    <ScrollView style={styles.container}
       showsVerticalScrollIndicator={false}>
      <HeaderComponent onBack={navigation.goBack} profile />
      <Text style={styles.txt}>Wishlist log</Text>
      <View style={{ flexGrow: 1 }}>
        <FlatList
          data={movies}
          renderItem={({ item, index }) => renderWishlistItem(item, index)}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ gap: 4}}
          ListEmptyComponent={
            <Text style={{ color: 'white' }}>
              No movies in your wishlist yet.
            </Text>
          }
        />
      </View>
      <Text style={styles.txt}>Reviews made by you</Text>
      <View style={{ flexGrow: 1 }}>
          <FlatList
            data={reviews}
            keyExtractor={(item, index) => item.id || index.toString()}
            renderItem={({ item }: { item: any }) => (
              <View style={styles.reviewItem}>
                <Text style={styles.reviewUser}>Review on MOVIE ID:{item.movie_id}</Text>
                <Text style={styles.reviewContent}>{item.review}</Text>
              </View>
            )}
            ListEmptyComponent={
              <Text style={{ color: 'white' }}>No reviews yet.</Text>
            }
            contentContainerStyle={{ paddingBottom: 20 }}
          />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#052433ff',
    paddingHorizontal: 16,
  },
  txt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
      marginVertical: 16, 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#37505D',
    padding: 10,
    borderRadius: 10,
  },
  rank: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    width: 30,
    textAlign: 'center',
  },
  movieInfo: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  rating: {
    color: '#FFD700',
    fontSize: 12,
  },
  poster: {
    width: 40,
    height: 60,
    borderRadius: 6,
  },
  icon: {
    height: 10,
    width: 10,
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

export default ProfileScreen;
function getMovieDetail(movie_id: any) {
  throw new Error('Function not implemented.');
}
