import React from 'react';
import { Component } from "react";
import { styles } from '../Styles/FooterButtonsStyle';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, Button } from 'react-native';

export default class FooterButtons extends Component {
    static propTypes = {
        onSecondaryButtonClick: PropTypes.func,
        secondaryButtonText: PropTypes.string,
        onPrimaryButtonClick: PropTypes.func,
        primaryButtonText: PropTypes.string,
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.props.onPrimaryButtonClick}>
                    <Text style={styles.text}>  {this.props.primaryButtonText}  </Text>
                </TouchableHighlight>

                <Button
                    onPress={this.props.onSecondaryButtonClick}
                    title={this.props.secondaryButtonText}
                    color="#FF8C00"
                />
            </View>
        )
    }
}