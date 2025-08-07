import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Config } from 'react-native-config';
import Toast from 'react-native-toast-message';
import { AxiosInstance } from '../utils/Axios';
import CardComponent from './CardComponent';

type CarouselComponentProps = {
  label: string;
};
const CarouselComponent = (props: CarouselComponentProps) => {
  const [movies, setMovies] = useState<any[]>([]);

  const urlMap: Record<string, string> = {
    'New Release': 'now_playing?language=en-US&page=1',
    'Upcoming Movies': 'upcoming?language=en-US&page=2',
    'Ranked Movies': 'top_rated?language=en-US&page=4',
  };
  useEffect(() => {
    console.log('api', Config.API_BEARER_TOKEN);
    const getNowPlaying = async () => {
      try {
        // const response = await axios.get(urlMap[props.label],
        //   {
        //     headers: {
        //       accept: 'application/json',
        //       Authorization: `Bearer ${Config.API_KEY}`,
        //     },
        //   },
        // );

        const response = await AxiosInstance.get(urlMap[props.label]);
        setMovies(response.data.results);
      } catch (err) {
        Toast.show({
          type: 'error',
          text1: 'Try again!',
          text2: 'Something went wrong',
        });
      }
    };

    getNowPlaying();
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
