import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: Math.round(Dimensions.get('window').height),
    },

    button: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    }

});