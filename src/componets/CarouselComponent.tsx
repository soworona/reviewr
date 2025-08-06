import { StyleSheet, Text, View } from "react-native";

const CarouselComponent = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>New Releases</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 15
    }, 
    heading:{
        color:'white',
        fontWeight:600,
        fontSize:16
    }
})

export default CarouselComponent;