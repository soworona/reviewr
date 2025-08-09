import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CarouselComponent from '../../componets/CarouselComponent';
import { BottomTabsProp } from '../../navigation/type';

const HomeScreen = ({navigation}: BottomTabsProp<'Home'>) => {
  const handleCardPress = (movie_id:number) => {
    navigation.navigate('Details',{movie_id: movie_id});
  }
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

      <CarouselComponent label="New Release"  urlPath='movie/now_playing?language=en-US&page=1' onPress={handleCardPress}/>
      <CarouselComponent label="Upcoming Movies" urlPath='movie/upcoming?language=en-US&page=2' onPress={handleCardPress} showReleaseDate/>
      <CarouselComponent label="Ranked Movies" urlPath='movie/top_rated?language=en-US&page=5' onPress={handleCardPress} showRating/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#002335',
    paddingVertical: 21,
    paddingHorizontal: 13,
    gap: 20,
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
