import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { BottomTabsProp } from '../../navigation/type';
import { useAppSelector } from '../../redux/hooks';
import { Movie } from '../../types/Movies';
import { getMovieList } from '../../utils/MovieService';

const WishlistScreen = ({ navigation }: BottomTabsProp<'Wishlist'>) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const movieIds = useAppSelector(state => state.wishlist.movieIds);
  const status = useAppSelector(state => state.wishlist.status);
  const error = useAppSelector(state => state.wishlist.error);

    useEffect(() =>{
       if (movieIds.length === 0) {
      setMovies([]);
      return;
    }

    const fetchMovieDetail = async() => {
      const path = `account/22105497/watchlist/movies`;
      const data = await getMovieList(path);
      setMovies(data);
    }
      fetchMovieDetail()
    },[movieIds])

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //   const fetchWatchList = async () => {
  //     const path = `account/22105497/watchlist/movies`;
  //     const data = await getMovieList(path);

  //     setMovies(data);}
  //     fetchWatchList();
  //   })
  //    return unsubscribe;
  // }, []);

  if (status === 'pending') {
    return (
      <View style={styles.container}>
        <Text style={{color:'white'}}>Loading wishlist...</Text>;
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.container}>
        <Text style={{color:'white'}}>Error loading wishlist: {error}</Text>;
      </View>
    );
  }

  if (movies.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{color:'white'}}>Your wishlist is empty.</Text>;
      </View>
    );
  }

  const renderMovieItem = ({ item }: { item: Movie }) => {
    return (
      <View style={styles.img}>
        <FastImage
          source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
        contentContainerStyle={{ gap: 6 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002335',
    paddingHorizontal: 21,
    gap: 6,
    flexDirection: 'row',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
  img: {
    maxWidth: 90,
    flex: 1,
    height: 120,
    overflow: 'hidden',
    borderRadius: 8,
  },
});

export default WishlistScreen;
