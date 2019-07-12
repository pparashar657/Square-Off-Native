import React from 'react';
import { Component } from "react";
import { styles } from '../Styles/DropDownStyle';
import PropTypes from 'prop-types';
import { View, Text, Picker } from 'react-native';

export default class DropDown extends Component {
    static propTypes = {
        text: PropTypes.string,
        value: PropTypes.string,
        onSelect: PropTypes.func,
        list: PropTypes.any,
        isEnabled: PropTypes.bool,
    }
    render() {
        return (
            <View style={styles.entity}>
                <Text style={styles.text}>{this.props.text}</Text>
                <View style={styles.picker}>
                    <Picker
                        mode="dropdown"
                        selectedValue={this.props.value}
                        enabled={this.props.isEnabled}
                        onValueChange={this.props.onSelect}>
                        {Object.keys(this.props.list).map((key) => {
                            return (<Picker.Item label={key} value={this.props.list[key]} />)
                        })}
                    </Picker>
                </View>
            </View>
        )
    }
}