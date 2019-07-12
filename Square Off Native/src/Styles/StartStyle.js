import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-between'
    },
    logo: {
        height: 100,
        backgroundColor: 'black',
    },
    logoImage: {
        marginLeft: 10,
        marginTop: 10,
        width: 80,
        height: 80,
    },
    gifImage: {
        width: 350,
        height: 200,
        alignSelf: 'center',
    },
    startButton: {
        marginBottom: 100,
        alignItems: 'center',
    },

});