import React from 'react';
import { Component } from "react";
import { styles } from '../Styles/HomeStyle';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';

export default class HomePageButton extends Component {
    static propTypes = {
        image: PropTypes.any,
        text: PropTypes.string,
        onClick: PropTypes.func,
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onClick} >
                <View style={styles.item}>
                    <Image
                        style={styles.homePageImage}
                        source={this.props.image} />
                    <Text style={styles.homePageText}>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}