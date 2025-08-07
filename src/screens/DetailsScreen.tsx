import { StyleSheet, View, Text } from 'react-native';
import { RootStackScreenProp } from '../navigation/type';
import { useEffect, useState } from 'react';
import { Movie } from '../types/Movies';
import { AxiosInstance } from '../utils/Axios';
import { Button } from '@react-navigation/elements';
import ButtonComponent from '../componets/ButtonComponent';

const DetailsScreen = ({ route, navigation }: RootStackScreenProp<'Details'>) => {
  const id = route.params.movie_id;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await AxiosInstance.get(`${id}?language=en-US`);
        setMovie(response.data);
        console.log('details', response.data);
      } catch (error) {
        console.error('Failed to fetch movie details', error);
      }
    };

    getMovieDetails();
  }, [id]);

  const handleAddReviewPress = ()=>{
    navigation.navigate('App')
  }
  return (
    <View style={styles.container}>
      {movie && (
        <>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {movie.title}
          </Text>
          <Text>{movie.overview}</Text>
        </View>
          <ButtonComponent label="Add review" onPress={handleAddReviewPress} />
            <Text style={styles.txt}>Your reviews</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#052433ff',
    padding: 16,
  },
  header: {
    backgroundColor: '#5D6F78',
    padding: 16,
    borderRadius: 8,
  },
  txt:{
    color:'white'
  }
});

export default DetailsScreen;
