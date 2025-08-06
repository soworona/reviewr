import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardComponent from './CardComponent';

type CarouselComponentProps = {
  label: string;
}
const CarouselComponent = (props: CarouselComponentProps) => {
    const dummyData = ['1', '2', '3', '4', '5'];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.label}</Text>
          <FlatList
        data={dummyData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={() => <CardComponent />}
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
