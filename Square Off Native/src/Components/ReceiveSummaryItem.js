import React from 'react';
import { Component } from "react";
import { styles } from '../Styles/ReceiveSummaryItemStyles';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ReceiveSummaryItem extends Component {
    static propTypes = {
        text: PropTypes.string,
        list: PropTypes.any,
        onClick: PropTypes.func,
    }

    click = () => {
        this.props.onClick(this.props.text, this.props.list)
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.box}
                onPress={this.click}>
                <Text style={styles.textItem}>{this.props.text}</Text>
                <Text style={styles.textItem}>( {this.props.list.length} )</Text>
            </TouchableOpacity>
        )
    }
}