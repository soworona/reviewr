import { Image, StyleSheet, Text, View } from 'react-native';

const CardComponent = ({ movie }: { movie: any }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.img} resizeMode="cover" />
      <Text style={styles.heading} numberOfLines={2} ellipsizeMode="tail">
        {movie.title}
      </Text>
    </View>
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
    backgroundColor: 'pink',
  },
  heading: {
    color: 'white',
    fontWeight: 300,
    fontSize: 14,
  },
});

export default CardComponent;
