import { StyleSheet, Text, View } from 'react-native';
import CardComponent from './CardComponent';

const CarouselComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Releases</Text>
      <View style={styles.carousel}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </View>
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
