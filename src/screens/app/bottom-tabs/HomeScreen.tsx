import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CarouselComponent from '../../../componets/CarouselComponent';

const HomeScreen = () => {
  const handleCardPress = () => {

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

      <CarouselComponent label="New Release"  urlPath='now_playing?language=en-US&page=1' onPress={handleCardPress}/>
      <CarouselComponent label="Upcoming Movies" urlPath='upcoming?language=en-US&page=2' onPress={handleCardPress}/>
      <CarouselComponent label="Ranked Movies" urlPath='top_rated?language=en-US&page=5' onPress={handleCardPress}/>
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
