import { StyleSheet } from 'react-native';

export const styles = (props) => StyleSheet.create({
    input: {
        width: props.width || 150,
        borderColor: 'black',
        color: 'black',
        borderRadius: 5,
        borderWidth: 1
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: props.textMargin || 10,
    },

    text: {
        fontSize: props.textSize || 20,
        color: 'black',
        marginRight: 10,
        maxWidth: 170,
    }
});