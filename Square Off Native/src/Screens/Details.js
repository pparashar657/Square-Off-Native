import React from 'react';
import { styles } from '../Styles/DetailStyles'
import { View } from 'react-native';
import { SummaryList } from '../Components/SummaryList';
import Heading from '../Components/Heading'

export class DetailScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };
    state = {
        title: this.props.navigation.state.params.title,
        list: this.props.navigation.state.params.list,
    }

    render() {
        return (

            <View style={styles.Container}>

                <Heading text={this.state.title} />

                <View style={styles.MainContainer}>
                    <SummaryList
                        onRef={ref => (this.child = ref)}
                        clickable={false}
                        list={this.state.list}
                    />
                </View>

            </View>

        );
    }
}