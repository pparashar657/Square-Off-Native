import React from 'react';
import Heading from '../Components/Heading';
import headImage from './Assets/problem.png';
import { styles } from '../Styles/ProblemSolveStyles';
import * as Constants from '../Classes/Constants';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export class ProblemSolveScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    onClick = (isTrackingId) => {
        this.props.navigation.navigate(Constants.ProblemDetails, { 'trackingId': isTrackingId })
    }

    render() {

        return (
            <ScrollView>

                <View style={styles.container}>

                    <Heading text='Problem Solve' image={headImage} />

                    <View style={styles.itemContainer}>

                        <TouchableOpacity onPress={this.onClick.bind(this, true)}>
                            <View style={styles.card}>
                                <Text style={styles.text}>Package has a </Text>
                                <Text style={styles.text}>Tracking Id.</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.onClick.bind(this, false)}  >
                            <View style={styles.card}>
                                <Text style={styles.text}>Package doesn't have a </Text>
                                <Text style={styles.text}>Tracking Id.</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

            </ScrollView>
        );
    }
}
