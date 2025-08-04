import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#0524336c',
    paddingHorizontal: 13,
    paddingVertical: 24,
    justifyContent: 'space-between',
  },
  logo: {
    width: 160,
    height: 48,
    resizeMode: 'contain',
  },
  formContainer: {
    backgroundColor: '#ffffff3f',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ffffff59',
    overflow:'hidden'
  },
  heading: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 5,
  },
  subheading: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 20,
  },
  highlight: {
    fontWeight: 700,
    fontSize: 15,
    color: '#FFB703',
    marginTop: 19,
    marginBottom: 19,
    textAlign: 'right',
  },
  regularTxt: {
    fontWeight: 400,
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    marginTop:19,
    marginBottom:19
  },
});

export default styles;