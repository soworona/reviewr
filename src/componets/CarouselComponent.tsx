import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Config } from 'react-native-config';
import Toast from 'react-native-toast-message';
import { AxiosInstance } from '../utils/Axios';
import CardComponent from './CardComponent';
import { Movie } from '../types/Movies';

type CarouselComponentProps = {
  label: string;
  onPress: (movie_id: number) => void;
  urlPath: string;
};
const CarouselComponent = (props: CarouselComponentProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    console.log('api', Config.API_BEARER_TOKEN);
    const fetchMovieData = async () => {
      try {
        const response = await AxiosInstance.get(props.urlPath);
        const movieList = response.data.results.map((m: any) => ({
          id: m.id,
          title: m.title,
          overview: m.overview,
          poster_path: m.poster_path,
          backdrop_path: m.backdrop_path,
          release_date: m.release_date,
        }));

        setMovies(movieList);
      } catch (err) {
        Toast.show({
          type: 'error',
          text1: 'Try again!',
          text2: 'Something went wrong',
        });
      }
    };

    fetchMovieData();
  }, [props.label]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.label}</Text>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) =>
          item?.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }) => (
          <CardComponent movie={item} onPress={() => props.onPress(item.id)} />
        )}
        contentContainerStyle={styles.carousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  heading: {
    color: 'white',
    fontWeight: 600,
    fontSize: 16,
  },
  carousel: {
    flexDirection: 'row',
    gap: 12,
  },
});

export default CarouselComponent;
