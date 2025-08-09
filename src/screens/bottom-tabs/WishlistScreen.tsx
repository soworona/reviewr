import { StyleSheet, Text, View } from "react-native"

const WishlistScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Wishlist</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#052433ff'
    }
})

export default WishlistScreen;