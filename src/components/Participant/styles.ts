import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: '#1F1FE25',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 10,
    },
    name: {
        color: '#FFF',
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        lineHeight: 56,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FDFCFE',
        fontSize: 24,
    }
})
