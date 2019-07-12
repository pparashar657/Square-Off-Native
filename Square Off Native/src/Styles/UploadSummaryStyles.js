import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 2

    },

    Container: {
        backgroundColor: 'white',
        flex: 1
    },

    input: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 2

    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    textInputStyle: {

        textAlign: 'center',
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderColor: '#146EB4',
        borderRadius: 7,
        marginTop: 12
    },

    button: {
        width: '90%',
        height: 40,
        padding: 10,
        backgroundColor: '#FF9900',
        borderRadius: 8,
        marginTop: 10
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },

    addImage: {
        margin: 15,
        alignSelf: 'flex-end',
        width: 40,
        height: 40,
        position: 'absolute',
    }

});