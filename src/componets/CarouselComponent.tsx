import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardComponent from './CardComponent';
import Config from 'react-native-config';
import { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';

type CarouselComponentProps = {
  label: string;
};
const CarouselComponent = (props: CarouselComponentProps) => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const axios = require('axios').default;
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${Config.API_BEARER_TOKEN}`,
            },
          },
        );
        setMovies(response.data.results);
        console.log('response', response.data.results);
      } catch (err) {
        Toast.show({
          type: 'error',
          text1: 'Try again!',
          text2: 'Something went wrong',
        });
      }
    };

    getNowPlaying();
  }, []);

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
        renderItem={({ item }) => <CardComponent movie={item} />}
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
