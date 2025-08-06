import { StyleSheet, Text, View } from "react-native";

const CardComponent = () => {
    return(
        <View style={styles.container}>
            <View style={styles.img} />
            <Text style={styles.heading} numberOfLines={2} ellipsizeMode="tail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas modi consequatur eos, architecto veniam obcaecati consequuntur odit, dolorem cumque, nihil tenetur corporis natus laborum. Animi saepe recusandae iste rerum facere!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        maxWidth:120,
        maxHeight:213
    }, 
    img:{
        width:120,
        height:160, 
        borderRadius:8,
        backgroundColor:'pink'
    },
    heading:{
        color:'white',
        fontWeight:300,
        fontSize:14,
    }

})

export default CardComponent;