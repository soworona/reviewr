// components/MovieHeader.tsx
import React, { memo } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

type HeaderComponentProps = {
  backdropPath: string;
  posterPath: string;
  onBack: () => void;
}

const HeaderComponent = (props: HeaderComponentProps) => {
  return (
    <View style={styles.header}>
      <FastImage
        source={{
         uri: `https://image.tmdb.org/t/p/w500${props.backdropPath}`,
        }}
        style={styles.banner}
        resizeMode="cover"
      />

      <TouchableOpacity
        onPress={props.onBack}
        style={styles.backButton}
      >
        <Image
          source={require('../assets/icons/Back.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.posterContainer}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${props.posterPath}`,
          }}
          style={styles.poster}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
  },
  banner: {
    width: '100%',
    height: 200,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  backIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  posterContainer: {
    position: 'absolute',
    bottom: -50,
    left: 20,
    elevation: 5,
  },
  poster: {
    height: 150,
    width: 100,
    borderRadius: 8,
  },
});

export default memo(HeaderComponent);
