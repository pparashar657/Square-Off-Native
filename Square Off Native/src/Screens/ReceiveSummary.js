import React from 'react';
import Heading from '../Components/Heading';
import { styles } from '../Styles/ReceiveSummaryStyles';
import * as Constants from '../Classes/Constants';
import ReceiveSummaryItem from '../Components/ReceiveSummaryItem';
import { View, Text, ScrollView } from 'react-native';

export class ReceiveSummary extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)

        this.showSummary.bind(this)

        this.state = {
            source: this.props.navigation.state.params.source,
            target: this.props.navigation.state.params.target,
            challan: this.props.navigation.state.params.challan,
            totalList: [],
            reconciledList: [],
            unreconciledList: [],
            extraReconciledList: [],
        }
    }

    showSummary = (title, list) => {
        this.props.navigation.navigate(Constants.Detail, { 'title': title, 'list': list })
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.container}>

                    <Heading text='Receive Summary' />

                    <View style={styles.detailContainer}>
                        {/* Using AMDD as Source if Nothing is Provided, until backend is integrated */}
                        <Text style={styles.text}>Source :  {this.state.source || 'AMDD'}</Text>
                        <Text style={styles.text}>Target :  {this.state.target}</Text>
                        <Text style={styles.text}>Challan No :  {this.state.challan}</Text>
                    </View>

                    <View style={styles.listBox}>

                        <View style={styles.item}>
                            <ReceiveSummaryItem
                                text='Total Sent'
                                list={this.state.totalList}
                                onClick={this.showSummary}
                            />

                            <ReceiveSummaryItem
                                text='Reconciled'
                                list={this.state.reconciledList}
                                onClick={this.showSummary}
                            />
                        </View>

                        <View style={styles.item}>
                            <ReceiveSummaryItem
                                text='Unreconciled'
                                list={this.state.unreconciledList}
                                onClick={this.showSummary}
                            />

                            <ReceiveSummaryItem
                                text='Extra Reconciled'
                                list={this.state.extraReconciledList}
                                onClick={this.showSummary}
                            />
                        </View>

                    </View>

                </View>
            </ScrollView>
        );
    }
}