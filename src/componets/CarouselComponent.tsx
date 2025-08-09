import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../types/Movies';
import { getMovieList } from '../utils/MovieService';
import CardComponent from './CardComponent';
import Toast from 'react-native-toast-message';

type CarouselComponentProps = {
  label: string;
  onPress: (movie_id: number) => void;
  urlPath: string;
  list?: boolean;
  showReleaseDate?: boolean;
  showRating?: boolean;
  searchView?:boolean;
};

const CarouselComponent = (props: CarouselComponentProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovieList = async () => {
      try {
        const path = props.urlPath;
        const data = await getMovieList(path);
        setMovies(data);
      } catch (err) {
        Toast.show({
          type: 'error',
          text1: 'Unable to load movie list!',
          text2: 'Something went wrong',
        });
      }
    };
    loadMovieList();
  }, [props.label, props.urlPath]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.label}</Text>
      <FlatList
        data={movies}
        horizontal={!props.list}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) =>
          item?.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }) => (
          <CardComponent movie={item} onPress={() => props.onPress(item.id)} showReleaseDate={props.showReleaseDate} showRating={props.showRating} searchView={props.searchView} />
        )}
        contentContainerStyle={[
          styles.carousel,
          props.list && styles.verticalList,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    width: '100%',
  },
  heading: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  carousel: {
    flexDirection: 'row',
    gap: 12,
  },
  verticalList: {
    flexDirection: 'column',
    gap: 20,
  },
});

export default CarouselComponent;
