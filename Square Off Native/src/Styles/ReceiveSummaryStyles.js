import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: Math.round(Dimensions.get('window').height),
    },

    text: {
        fontSize: 15,
        color: 'white',
        margin: 5,
        fontWeight: 'bold'
    },

    detailContainer: {
        backgroundColor: '#37475A',
        flexDirection: 'column',
        margin: 10,
        marginTop: 15,
        marginBottom: 15,
        padding: 10,
        elevation: 5,
        borderRadius: 10,
    },

    listBox: {
        flex: 1,
        paddingBottom: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: 10,
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '50%',
    },

});