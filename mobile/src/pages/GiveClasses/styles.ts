import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22104c',
        justifyContent: 'center',
        padding: 40 
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 32,
        lineHeight:37,
        maxWidth: 180,
    },

    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    },

    button: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 8
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },

})

export default styles