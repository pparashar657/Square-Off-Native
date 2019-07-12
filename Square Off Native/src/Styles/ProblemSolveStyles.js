import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: Math.round(Dimensions.get('window').height),
    },
    card: {
        elevation: 10,
        padding: 20,
        margin: 25,
        width: 300,
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#e8e8e8'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    }
});