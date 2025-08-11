import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CarouselComponent from '../../componets/CarouselComponent';
import SearchBarComponent from '../../componets/SearchBarComponent';
import { BottomTabsProp } from '../../navigation/type';
import { debounce } from 'lodash';

const SearchScreen = ({ navigation }: BottomTabsProp<'Search'>) => {
  const [query, setQuery] = useState('');
  const [path, setPath] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuerySubmit = (searchString: string) => {
    if (searchString.length < 2) {
      setPath('');
      return;
    }
    setLoading(true);
    const queryPath = `search/movie?language=en-US&page=1&query=${searchString.trim()}`;
    setPath(queryPath);
    setLoading(false);
  };

  const debouncedFetch = useCallback(debounce(handleQuerySubmit(), 1000), []);

    const handleSearchChange = (searchString: string) => {
    setQuery(searchString);
    debouncedFetch(searchString);
  };

  const handleMovieCardPress = (id: number) => {
    navigation.navigate('Details', { movie_id: id });
  };

  useEffect(() => {
    const trimmedQuery = query.trim();
    console.log('serach bar query:', trimmedQuery);

    const delayDebounce = setTimeout(() => {
      handleQuerySubmit(trimmedQuery);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

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

  return (
    <SafeAreaView style={styles.container}>
      <SearchBarComponent
        value={query}
        onChangeText={() =>handleSearchChange(query)}
        onSubmit={() => handleQuerySubmit(query)}
      />
      {path ? (
        <CarouselComponent
          label="Search result"
          onPress={handleMovieCardPress}
          urlPath={path}
          list
        />
      ) : (
        <>
          <CarouselComponent
            label="Trending this month"
            onPress={handleMovieCardPress}
            urlPath="movie/popular?language=en-US&page=2"
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#758892',
              width: 360,
              alignItems: 'center',
              borderRadius: 14,
              elevation: 16,
            }}
          >
            <Image
              source={require('../../assets/Browse.png')}
              style={{ width: 330, resizeMode: 'contain', height: 83 }}
            />
          </TouchableOpacity>

          <CarouselComponent
            label="Upcoming Movies"
            urlPath="movie/upcoming?language=en-US&page=2"
            onPress={handleMovieCardPress}
            showReleaseDate
            searchView
          />
        </>
      )}
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
