import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CarasoulComponent from '../../componets/CarouselComponent';
import Config from 'react-native-config';

const HomeScreen = () => {
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    Authorization: `Bearer ${Config.API_BEARER_TOKEN}`, 
    },
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text style={styles.heading}>
          Welcome back, <Text style={{ color: '#FFCA45' }}>Dilhara</Text> !
        </Text>
        <Text style={styles.subheading}>
          Review or log film you’ve watched...
        </Text>
      </View>

      <CarasoulComponent label="New Releases" />
      <CarasoulComponent label="Upcoming Movies" />
      <CarasoulComponent label="Ranked Movies" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#002335',
    paddingVertical: 21,
    paddingHorizontal: 13,
    gap: 25,
  },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
  },
  subheading: {
    color: 'white',
    fontSize: 14,
    fontWeight: 400,
  },
});
export default HomeScreen;
