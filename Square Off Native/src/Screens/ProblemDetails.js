import React from 'react';
import * as Constants from '../Classes/Constants';
import Heading from '../Components/Heading';
import ProblemDetail from '../Classes/ProblemSolveDetails';
import { styles } from '../Styles/ProblemDetailStyles';
import InputText from '../Components/InputText';
import DropDown from '../Components/DropDown';
import { View, Button, ScrollView, Alert } from 'react-native';

export class ProblemDetails extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)

        this.state = {
            trackingId: '',
            xoo: '',
            quantity: '',
            ticket: '',
            processedAt: '',
            markedUnder: '',
            newId: '',
            comments: '',
            isTrackingId: this.props.navigation.state.params.trackingId,
            headingText: Constants.HeadingWithID,
            markedUnderList: Constants.MarkedUnder,
        }
    }

    componentDidMount() {
        if (!this.state.isTrackingId) {
            this.setState({ headingText: Constants.HeadingWithoutID })
            this.setState({ markedUnderList: Constants.MarkedUnderWithoutId })
        }
    }

    updateTrackingID = (trackingId) => {
        this.setState({ trackingId: trackingId })
    }

    updateXoo = (xoo) => {
        this.setState({ xoo: xoo })
    }

    updateQuantity = (quantity) => {
        this.setState({ quantity: quantity })
    }

    updateTicket = (ticket) => {
        this.setState({ ticket: ticket })
    }

    updateProcessedAt = (processedAt) => {
        this.setState({ processedAt: processedAt })
    }

    updateMarkedUnder = (markedUnder) => {
        this.setState({ markedUnder: markedUnder })
    }

    updateNewId = (newId) => {
        this.setState({ newId: newId })
    }

    updateComments = (comments) => {
        this.setState({ comments: comments })
    }

    isComplete = () => {
        if ((this.state.isTrackingId && this.state.trackingId.trim() == '') || this.state.xoo.trim() == '' || this.state.processedAt == '' || this.state.markedUnder == '') {
            return false
        } else {
            return true
        }
    }

    submit = () => {
        if (this.isComplete()) {
            var newProblem = new ProblemDetail(this.state.trackingId, this.state.xoo, this.state.quantity, this.state.ticket, this.state.processedAt, this.state.markedUnder, this.state.newId, this.state.comments, (new Date).getTime())
            // TODO
            // Add record in the Database.

            Alert.alert(
                'Success:',
                'Record Added Successfully',
                [{ text: 'Done', onPress: () => { this.props.navigation.navigate(Constants.ProblemSolve) } }],
                { cancelable: false },
            )
        } else {
            Alert.alert(
                'ERROR:',
                'Please Complete the details',
                [{ text: 'OK' }],
            )
        }
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.container}>

                    <Heading text={this.state.headingText} textSize={20} />

                    <View>
                        {
                            this.state.isTrackingId &&
                            <InputText
                                text='Tracking ID :'
                                callBack={this.updateTrackingID}
                                value={this.state.trackingId}
                            />
                        }

                        <InputText
                            text='XOO/BOO/LPN :'
                            callBack={this.updateXoo}
                            value={this.state.xoo}
                        />

                        <InputText
                            text='Item Quantity :'
                            callBack={this.updateQuantity}
                            value={this.state.quantity}
                        />

                        <InputText
                            text='Associated Ticket :'
                            callBack={this.updateTicket}
                            value={this.state.ticket}
                        />

                        <DropDown
                            text='Processed At :'
                            value={this.state.processedAt}
                            onSelect={this.updateProcessedAt}
                            list={Constants.FCs}
                        />

                        <DropDown
                            text='Marked Under :'
                            value={this.state.markedUnder}
                            onSelect={this.updateMarkedUnder}
                            list={this.state.markedUnderList}
                        />

                        {
                            this.state.isTrackingId &&
                            <InputText
                                text='If Missort, New Tracking ID :'
                                callBack={this.updateNewId}
                                value={this.state.newId}
                            />
                        }

                        <InputText
                            text='Comments'
                            callBack={this.updateComments}
                            value={this.state.comments}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            onPress={this.submit}
                            title='  Submit  '
                            color='#FF8C00'
                        />
                    </View>

                </View>

            </ScrollView>
        );
    }
}