import { Image, StyleSheet, TextInput, View } from 'react-native';

type InputComponentProps = {
  placeholder: string;
  icon: string
};

const IconMap: Record<string, any> = {
  user: require('../assets/icons/Union(1).png'), 
  lock: require('../assets/icons/Union.png'), 
};

const InputComponent = (props : InputComponentProps) => {
  return (
    <View style={styles.inputWrapper}>
      <Image source={IconMap[props.icon]} style={styles.icon} />
      <TextInput placeholder={props.placeholder} style={styles.textInput} 
      placeholderTextColor={'#FFFFFF80'}  />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF52',
    backgroundColor:'#C4C4C499',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
    width:20,
    height:20,
    marginLeft:10,
    resizeMode:'contain',
  },
  textInput: {
    flex: 1,
  },
});

export default InputComponent;
