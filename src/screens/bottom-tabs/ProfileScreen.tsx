import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from '../../componets/HeaderComponent';
import { BottomTabsProp } from '../../navigation/type';
import { useEffect, useState } from 'react';
import { Movie } from '../../types/Movies';
import { useAppSelector } from '../../redux/hooks';
import { getMovieList } from '../../utils/MovieService';
import FastImage from 'react-native-fast-image';

const ProfileScreen = ({ navigation }: BottomTabsProp<'Profile'>) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const movieIds = useAppSelector(state => state.wishlist.movieIds);

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
    <View style={styles.container}>
      <HeaderComponent onBack={navigation.goBack} profile />
      <Text style={styles.txt}>Wishlist log</Text>
      <FlatList
        data={movies}
        renderItem={({ item, index }) => renderWishlistItem(item, index)}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ gap: 4 }}
        ListEmptyComponent={
          <Text style={{ color: 'white' }}>No movies yet.</Text>
        }
      />
      <Text style={styles.txt}>Reviews made by you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#052433ff',
    paddingHorizontal: 16,
    gap: 16,
  },
  txt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
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
