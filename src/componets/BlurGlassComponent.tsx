import { BlurView } from "@react-native-community/blur"
import { StyleSheet, View } from "react-native"

const BlurGlassComponent = () => {
    return (
        <View                       style={styles.formContainer}
>
                    <BlurView
                      blurType="light"
                      blurAmount={10}
                      reducedTransparencyFallbackColor="white"
                    />

        </View>
    )
}

const styles = StyleSheet.create({
      formContainer: {
    gap: 20,
    backgroundColor: '#ffffff3f', 
    paddingHorizontal: 17,
    paddingVertical: 20,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ffffff6b',
  },
})

export default BlurGlassComponent;