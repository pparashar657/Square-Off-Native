import React from 'react';
import { Component } from "react";
import { styles } from '../Styles/HeadingStyle';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

export default class Heading extends Component {
    static propTypes = {
        image: PropTypes.any,
        text: PropTypes.string,
        textSize: PropTypes.any,
    }
    render() {
        return (
            <View style={styles(this.props).heading}>
                <Image
                    style={styles(this.props).headImage}
                    source={this.props.image} />
                <Text style={styles(this.props).headText}>{this.props.text}</Text>
            </View>
        )
    }
}