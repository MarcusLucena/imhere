import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },
    formContainer: {
        flexDirection: 'row',
        marginTop: 18,
        marginBottom: 42,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FDFCFE',
        padding: 16,
        fontSize: 16,
        marginTop: 18,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#A370F7',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
    },
    buttonText: {
        color: '#FDFCFE',
        fontSize: 24,
    },
});
