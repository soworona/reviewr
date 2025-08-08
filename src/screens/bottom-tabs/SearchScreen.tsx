import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBarComponent from '../../componets/SearchBarComponent';
import { useState } from 'react';
import CarouselComponent from '../../componets/CarouselComponent';
import { BottomTabsProp } from '../../navigation/type';

const SearchScreen = ({navigation}:BottomTabsProp<'Search'>) => {
  const [query, setQuery] = useState('');

  const handleQuerySubmit = () => {
    console.log('query', query);
  };

  const handlMovieCardPress = (id:number) =>{
    navigation.navigate('Details',{movie_id: id})
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchBarComponent
        value={query}
        onChangeText={setQuery}
        onSubmit={handleQuerySubmit}
      />
      <CarouselComponent
        label={'Trending this month '}
        onPress={handlMovieCardPress}
        urlPath={'movie/popular?language=en-US&page=2'}
      />
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
  },
});
export default SearchScreen;
