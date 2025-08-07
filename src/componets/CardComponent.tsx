import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

type CardComponentProps = {
  movie: any;
  onPress: () => void;
}
const CardComponent = (props: CardComponentProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress} >
      <FastImage source={{ uri: imageUrl }} style={styles.img} resizeMode="cover" />
      <Text style={styles.heading} numberOfLines={2} ellipsizeMode="tail">
        {props.movie.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    maxWidth: 120,
    maxHeight: 213,
  },
  img: {
    width: 120,
    height: 160,
    borderRadius: 8,
  },
  heading: {
    color: 'white',
    fontWeight: 300,
    fontSize: 14,
  },
});

export default CardComponent;
