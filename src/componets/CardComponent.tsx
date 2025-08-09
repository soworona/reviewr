import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Movie } from '../types/Movies';
import formatDate from '../utils/FormatDate';

type CardComponentProps = {
  movie: Movie;
  onPress: () => void;
  showReleaseDate?: boolean;
  showRating?: boolean;
  searchView?: boolean;
  listView?: boolean;
};

const CardComponent = (props: CardComponentProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;

  if (props.listView) {
    return (
      <TouchableOpacity style={styles.listContainer} onPress={props.onPress}>
        <FastImage source={{ uri: imageUrl }} style={styles.listImage} resizeMode="cover" />
        <View style={styles.listTextContainer}>
          <Text style={styles.heading} numberOfLines={1} ellipsizeMode="tail">
            {props.movie.title}
          </Text>
          <Text style={{color:'#ffffff99'}}
          numberOfLines={3} ellipsizeMode=''>{props.movie.overview}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[styles.container, { width: props.searchView ? 224 : 120 }]}
      onPress={props.onPress}
    >
      <FastImage source={{ uri: imageUrl }} style={[styles.img, { width: props.searchView ? 224 : 120 }]} resizeMode="cover" />
      <Text style={styles.heading} numberOfLines={1} ellipsizeMode="tail">
        {props.movie.title}
      </Text>
      {props.showReleaseDate && <Text style={styles.subheading}>{formatDate(props.movie.release_date)}</Text>}
      {props.showRating && (
        <Text style={styles.subheading}>
          <Image source={require('../../src/assets/icons/Star.png')} style={styles.icon} />
          {' '}
          {Math.round((props.movie.vote_average / 2) * 10) / 10}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  img: {
    height: 160,
    borderRadius: 8,
  },
  heading: {
    color: '#E0E0E0',
    fontWeight: '400',
    fontSize: 14,
  },
  subheading: {
    color: '#E0E0E0',
    fontSize: 12,
    fontWeight: '300',
  },
  icon: {
    height: 10,
    width: 10,
  },
  listContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    paddingVertical: 8,
  },
  listImage: {
    width: 100,
    height: 140,
    borderRadius: 8,
  },
  listTextContainer: {
    flex: 1,
    justifyContent:'flex-start',
    gap: 4,
  },
});

export default CardComponent;
