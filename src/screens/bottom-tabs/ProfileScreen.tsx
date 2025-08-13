import { FlatList, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from '../../componets/HeaderComponent';
import { BottomTabsProp } from '../../navigation/type';

const ProfileScreen = ({ navigation }: BottomTabsProp<'Profile'>) => {
  return (
    <View style={styles.container}>
      <HeaderComponent onBack={navigation.goBack} profile />
      <Text style={styles.txt}>Movies in your wishlist</Text>
      <Text style={styles.txt}>Reviews made by you</Text>
      {/* <FlatList
                    renderItem={({ item }: { item: any }) => (
                      <View style={styles.reviewItem}>
                        <Text style={styles.reviewUser}>Review by {item.user_id}</Text>
                        <Text style={styles.reviewContent}>{item.review}</Text>
                      </View>
                    )}
                    ListEmptyComponent={
                      <Text style={{ color: 'white' }}>No reviews yet.</Text>
                    }
                    contentContainerStyle={{ paddingBottom: 20 }}
                  /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#052433ff',
    paddingHorizontal: 16,
    gap: 16,
  },
  txt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
  },
  reviewItem: {
    backgroundColor: '#37505D',
    padding: 12,
    borderRadius: 14,
    marginBottom: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: '#ffffff1a',
    elevation: 2,
  },
  reviewUser: {
    color: '#ffffff80',
    fontWeight: 300,
    fontSize: 11,
  },
  reviewContent: {
    color: '#F5F5F5',
    fontSize: 14,
  },
});

export default ProfileScreen;
