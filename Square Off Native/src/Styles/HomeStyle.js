import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    homePageImage: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    homePageText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    item: {
        padding: 15,
        margin: 20,
        flexDirection: 'row',
        width: 300,
        elevation: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#37475A'
    },
    homeContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center'
    },
});