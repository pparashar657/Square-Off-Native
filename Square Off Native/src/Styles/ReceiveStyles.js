import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: Math.round(Dimensions.get('window').height)
    },
    heading: {
        flexDirection: 'row',
        backgroundColor: '#232F3E',
        padding: 10,
        alignItems: 'center',
        height: 60
    },
    entity: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        justifyContent: 'space-between'
    },

    input: {
        flex: 1,
        borderColor: 'black',
        color: 'black',
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1
    },

    autoGenerate: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        marginTop: 0
    },
    pickerType: {
        borderBottomWidth: 1,
        width: 120,
    },
    setMargin: {
        margin: 10,
    },
    makeCenter: {
        position: 'absolute',
        alignSelf: 'center',
    },
    manualHolder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        marginLeft: 0,
    },
    progress: {
        marginLeft: 36
    },

});