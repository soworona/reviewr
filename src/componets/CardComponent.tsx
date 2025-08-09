import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Movie } from '../types/Movies';
import formatDate from '../utils/FormatDate';

type CardComponentProps = {
  movie: Movie;
  onPress: () => void;
  showReleaseDate?: boolean;
  showRating?: boolean
}
const CardComponent = (props: CardComponentProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;
  console.log("Movie data from card com:", props.movie);
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress} >
      <FastImage source={{ uri: imageUrl }} style={styles.img} resizeMode="cover" />
      <Text style={styles.heading} numberOfLines={1} ellipsizeMode="tail">
        {props.movie.title}
      </Text >
      {props.showReleaseDate && 
      <Text style={styles.subheading}>{formatDate(props.movie.release_date)}</Text>}
      {props.showRating && 
      <Text style={styles.subheading}>
        <Image source={require('../../src/assets/icons/Star.png')}  style={styles.icon}/>
        &nbsp;
        {Math.round((props.movie.vote_average / 2) * 10) / 10}</Text> }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    maxWidth: 120,
    // maxHeight: 213,
  },
  img: {
    width: 120,
    height: 160,
    borderRadius: 8,
  },
  heading: {
    color: '#E0E0E0',
    fontWeight: 400,
    fontSize: 14,
  },
  subheading:{
  color: '#E0E0E0',
    fontSize:12,
    fontWeight:300
  },
  icon:{
    height:10,
    width:10,
  }
});

export default CardComponent;
