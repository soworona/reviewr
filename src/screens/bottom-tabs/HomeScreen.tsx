import { StyleSheet, Text, View } from "react-native"

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome back, <Text style = {{color: '#FFCA45'}}>Dilhara</Text>!</Text>
            <Text style={styles.subheading}>Review or log film you’ve watched...</Text>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    flex: 1, 
    backgroundColor:'#002335',
    paddingVertical:21,
    paddingHorizontal: 13
    },
    heading: {
        color:'white',
        fontSize:20,
        fontWeight: 700
    },
    subheading:{
        color:'white',
        fontSize: 14,
        fontWeight: 400,
    }
})
export default HomeScreen;