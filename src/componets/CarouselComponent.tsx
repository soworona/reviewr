import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CardComponent from './CardComponent';

type CarouselComponentProps = {
  label: string;
}
const CarouselComponent = (props: CarouselComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.label}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </ScrollView>
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
