import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonComponentProps ={
    label: string
}
const ButtonComponent = (props: ButtonComponentProps) => {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={ styles.text }>{props.label}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFB703',
        padding:12,
        borderRadius:15,
        borderWidth:2,
        borderColor:'#FFCA45'


    },
    text: {
        fontWeight:800,
        color: 'white',
        fontSize:16,
        textAlign:'center'
    }
})

export default ButtonComponent;