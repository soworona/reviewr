import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

type SearchBarComponentProps = {
    value :string;
    onChangeText: (text:string) => void;
    onSubmit: () => void;
}
const SearchBarComponent = (props: SearchBarComponentProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={'#FFFFFF80'}
        value={props.value}
        onChangeText={props.onChangeText}
        returnKeyType="search"
        onSubmitEditing={props.onSubmit}
      />
      <TouchableOpacity onPress={props.onSubmit}>
      <Image
        source={require('../assets/icons/Search.png')}
        style={styles.icon}
        />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C4C4C499',
    borderWidth: 1,
    borderColor: '#FFFFFF52',
    borderRadius: 14,
    width: 350,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {

    paddingLeft:16,
    paddingVertical: 12,
    flex:1
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 16,
    resizeMode: 'contain',
  },
});

export default SearchBarComponent;
