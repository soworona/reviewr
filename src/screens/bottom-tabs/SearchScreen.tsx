import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBarComponent from "../../componets/SearchBarComponent";

const SearchScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <SearchBarComponent />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#052433ff',
        flex:1,
        paddingVertical:30,
        alignItems:'center'
    }
})
export default SearchScreen;