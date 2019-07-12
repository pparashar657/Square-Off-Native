import React from 'react';
import { Component } from "react";
import PropTypes from 'prop-types';
import { styles } from '../Styles/SummaryListStyles'
import { FlatList, Text, View, TouchableOpacity, Alert } from 'react-native';

export class SummaryList extends React.Component {

    static propTypes = {
        list: PropTypes.any,
        clickable: PropTypes.bool,
    }

    constructor(props) {
        super(props);
        this.array = this.props.list,
            this.state = {
                arrayHolder: [],
            }
    }

    componentDidMount() {
        this.props.onRef(this)
        this.setState({ arrayHolder: [...this.array] })
    }

    joinData = (data) => {
        if (this.state.arrayHolder.findIndex(item => item.key == data) == -1) {
            this.array.push({ key: data });
            this.setState({ arrayHolder: [...this.array] })
        } else {
            Alert.alert(
                'Error: ',
                'Tracking ID already Present',
                [{ text: 'ok' }]
            )
        }
    }

    getIndex = (key) => {
        return this.state.arrayHolder.findIndex(item => item.key == key)
    }

    removeItem = (data) => {
        if (this.props.clickable) {
            Alert.alert(
                'Alert: ',
                'Remove item with ID: ' + data,
                [{
                    text: 'Yes, Remove', onPress: () => {
                        i = this.getIndex(data)
                        this.array.splice(i, 1);
                        this.setState({ arrayHolder: [...this.array] })
                    }
                },
                {
                    text: 'Cancel'
                }]
            )
        }
    }


    render() {
        return (
            <FlatList
                data={this.state.arrayHolder}
                width='100%'
                keyExtractor={(index) => index.toString()}
                renderItem={({ item }) => <TouchableOpacity onLongPress={this.removeItem.bind(this, item.key)}>
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.key}</Text>
                    </View>
                </TouchableOpacity>}
            />

        );
    }
}