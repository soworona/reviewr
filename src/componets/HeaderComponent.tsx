// components/MovieHeader.tsx
import React, { memo } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import formatDate from '../utils/FormatDate';
import { Movie } from '../types/Movies';

type HeaderComponentProps = {
  movie?: Movie;
  onBack: () => void;
  profile? : boolean
}

const HeaderComponent = (props: HeaderComponentProps) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <View style={styles.header}>
      <FastImage
         source={{
    uri: props.profile
      ? `${imageBaseUrl}/9pKwSbMk7W8WR5d4oAVog3dWNg0.jpg`
      : `${imageBaseUrl}${props.movie?.backdrop_path}`,
  }}
        style={styles.banner}
        resizeMode='cover'
      />

      <TouchableOpacity
        onPress={props.onBack}
        style={{ position: 'absolute', top: 10 }}
      >
        <Image
          source={require('../assets/icons/Back.png')}
          style={{ height: 25, objectFit: 'contain' }}
        />
      </TouchableOpacity>

{props.movie &&(      <View style={styles.posterContainer}>
        <FastImage
          source={{
            uri:`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`,
          }}
          style={styles.poster}
          resizeMode="contain"
        />
      </View>)}
      { props.profile && (
        <View style={styles.profileImgContainer}>
          <FastImage
          source={
            require('../assets/profile.jpg')
          }
          style={styles.profile}
          resizeMode="contain"/>
        </View>

      )}

      <View style={styles.headerInfo}>
        <Text style={styles.headerTitle}>{props.profile? 'apple123' :props.movie?.title}</Text>
        {props.profile && (<Text style={styles.headerSubTitle}>@dilhara12</Text>)}
{props.profile ?(
  <>
  <View style ={{flexDirection:'row', gap:10}}>
  <Text style={styles.headerSubTitle}><Text style={{color:'white'}}>12</Text> Followers</Text>
    <Text style={styles.headerSubTitle}><Text style={{color:'white'}}>15</Text> Following</Text>
  </View>

  </>
):(          <>
        <Text style={styles.headerSubTitle}>
          <Image
            source={require('../assets/icons/Director.png')}
            style={styles.headerIcon}
          />{' '}
          Directed by Alfonso Cuarón
        </Text>
        <Text style={styles.headerSubTitle}>
          <Image
            source={require('../assets/icons/Person.png')}
            style={styles.headerIcon}
          />{' '}
          Warner Bros. Pictures
        </Text>
        </>)}
      </View>

{!props.profile && (      <View style={styles.headerBottom}>
        <Text style={styles.headerSubTitle}>
          <Image
            source={require('../assets/icons/Time.png')}
            style={styles.headerIcon}
          />{' '}
          2hr 30 min
        </Text>
        <Text style={styles.headerSubTitle}>
          <Image
            source={require('../assets/icons/Date.png')}
            style={styles.headerIcon}
          />{' '}
          {props.movie && formatDate(props.movie.release_date)}
        </Text>
        <Text style={styles.headerSubTitle}>
          <Image
            source={require('../assets/icons/Watchlist.png')}
            style={styles.headerIcon}
          />{' '}
          Not watched
        </Text>
      </View>)}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4a5e68ff',
    paddingHorizontal: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#817f8d33',
    paddingVertical: 8,
    elevation: 5,
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 6,
  },
  posterContainer: {
    position: 'absolute',
    height: 163,
    width: 106,
    elevation: 6,
    left: 20,
    top: 65,
  },
  poster: {
    height: '100%',
    width: '100%',
    borderRadius: 14,
  },
  profileImgContainer:{
  position: 'absolute',
  height:120,
  width: 120,
  bottom:20,
  left:10,

  },
  profile:{
    height: '100%',
    width: '100%',
    borderRadius: 60,
    elevation:15
  },
  headerInfo: {
    left: 125,
    width: 205,
    gap: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  headerSubTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffffbf',
  },
  headerIcon: {
    height: 10,
    width: 12,
    objectFit: 'contain',
  },
  headerBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
});

export default memo(HeaderComponent);