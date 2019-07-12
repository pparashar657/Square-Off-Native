import React from 'react';
import { Component } from "react";
import { styles } from '../Styles/InputTextStyle';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

export default class InputText extends Component {
    static propTypes = {
        text: PropTypes.string,
        placeholder: PropTypes.string,
        callBack: PropTypes.func,
        editable: PropTypes.bool,
        value: PropTypes.string,
        textSize: PropTypes.any,
        textMargin: PropTypes.any,
        width: PropTypes.any,
    }
    render() {
        return (
            <View style={styles(this.props).container}>
                <Text style={styles(this.props).text}>{this.props.text}</Text>

                <TextInput style={styles(this.props).input}
                    placeholder={this.props.placeholder}
                    underlineColorAndroid='transparent'
                    placeholderTextColor='black'
                    autoCapitalize="none"
                    editable={this.props.editable}
                    value={this.props.value}
                    selectionColor='black'
                    onChangeText={this.props.callBack} />
            </View>
        )
    }
}