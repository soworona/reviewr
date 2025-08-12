import { ActivityIndicator, View } from 'react-native';

const LoadingSpinnerComponent = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#052433ff',
      }}
    >
      <ActivityIndicator size="large" color="#ffffffac" />
    </View>
  );
};

export default LoadingSpinnerComponent;
