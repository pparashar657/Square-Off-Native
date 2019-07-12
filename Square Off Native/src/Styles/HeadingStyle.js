import { StyleSheet } from 'react-native';

export const styles = (props) => StyleSheet.create({
    heading: {
        flexDirection: 'row',
        backgroundColor: '#232F3E',
        padding: 10,
        alignItems: 'center',
        height: 60,
    },
    headImage: {
        width: 30,
        height: 30,
        marginRight: 20,
    },
    headText: {
        color: 'white',
        fontSize: props.textSize || 30,
        fontWeight: 'bold',
    }
});

