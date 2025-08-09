import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBarComponent from '../../componets/SearchBarComponent';
import { useEffect, useState } from 'react';
import CarouselComponent from '../../componets/CarouselComponent';
import { BottomTabsProp } from '../../navigation/type';
import { Movie } from '../../types/Movies';
import { getMovieList } from '../../utils/MovieService';

const SearchScreen = ({ navigation }: BottomTabsProp<'Search'>) => {
  const [query, setQuery] = useState('');
  const [path, setPath] = useState('');

  const handleQuerySubmit = async () => {
    const trimmedQuery = query.trim();
    const queryPath = `search/movie?language=en-US&page=1&query=${trimmedQuery}`;
    setPath(queryPath);
  };

  const handleMovieCardPress = (id: number) => {
    navigation.navigate('Details', { movie_id: id });
  };

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === '') {
      setPath('');
    }
  }, [query]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBarComponent
        value={query}
        onChangeText={setQuery}
        onSubmit={handleQuerySubmit}
      />
      {path && (
        <CarouselComponent
          label={'Search result'}
          onPress={handleMovieCardPress}
          urlPath={path}
          list
        />
      )}
      <CarouselComponent
        label={'Trending this month '}
        onPress={handleMovieCardPress}
        urlPath={'movie/popular?language=en-US&page=2'}
      />
      <>
      <TouchableOpacity style={{ backgroundColor:'#758892', width:360, alignItems:'center', borderRadius:14, elevation:16}}>
      <Image source={require('../../assets/Browse.png')} style={{width:330, objectFit:'contain', height:83}}/>
      </TouchableOpacity>

      <CarouselComponent
        label="Upcoming Movies"
        urlPath="movie/upcoming?language=en-US&page=2"
        onPress={handleMovieCardPress}
        showReleaseDate
        searchView
        />
        </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#052433ff',
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 13,
    alignItems: 'center',
    gap: 30,
  },
});
export default SearchScreen;
