import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: Math.round(Dimensions.get('window').height)
    },

    card: {
        margin: 20,
        flex: 1,
        elevation: 10,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 10,
        height: 230,
        backgroundColor: '#e8e8e8'
    },

    twoButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    summary: {
        alignItems: 'center',
    }
}); 