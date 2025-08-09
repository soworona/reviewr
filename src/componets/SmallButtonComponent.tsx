import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"

type SmallButtonComponentProps ={
    label : string;
    onPress?: ()  => void;
    utube?: boolean;
    watchlist?: boolean;
}
const SmallButtonComponent = (props:SmallButtonComponentProps) => {
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
           {props.watchlist && <Image source={require('../../src/assets/icons/Bookmark.png')} style={styles.icon} />}
           {props.utube && <Image source={require('../../src/assets/icons/Utube.png')} style={styles.icon} />}

            <Text style={{
                fontSize:11,
                color:'#ffffffb2',
                right:15
            }}>{props.label}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#5f6e75ff',
        paddingVertical:8,
        alignItems:'center',
        borderRadius:16,
        borderWidth:1,
        borderColor:'#939aa1ff',
        flexDirection:'row'
    },
    icon:{
        height:11,
        objectFit:'contain'
    }
})
export default SmallButtonComponent;