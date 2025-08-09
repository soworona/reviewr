import { StyleSheet, Text, View } from "react-native"

const WishlistScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.img} />
            <View style={styles.img} />
            <View style={styles.img} />
            <View style={styles.img} />
             <View style={styles.img} />
            <View style={styles.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#002335',
        paddingHorizontal:21,
        gap:6,
        flexDirection:'row',
        alignContent: 'flex-start',
        flexWrap:'wrap',
        paddingTop:30
    },
    img:{
        maxWidth:80,
        minWidth:80,
        flex:1,
        height:110,
        backgroundColor:'pink',
        borderRadius:8
    }
})

export default WishlistScreen;