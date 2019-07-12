import React from 'react';
import * as Constants from '../Classes/Constants';
import Heading from '../Components/Heading';
import { styles } from '../Styles/UploadStyle';
import DropDown from '../Components/DropDown';
import InputText from '../Components/InputText';
import FooterButtons from '../Components/FooterButtons';
import { View, Button, ScrollView, Alert } from 'react-native';
import Package from '../Classes/Package';
import uploadImage from './Assets/upload.png';


const initialState = {
    transactionType: '',
    source: '',
    destination: '',
    shipmentType: '',
    groupId: '',
}

export class UploadScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)

        this.state = {
            transactionType: '',
            source: '',
            destination: '',
            shipmentType: '',
            groupId: '',
            trackingList: [],
        }

    }

    updateTransactionType = (transactionType) => {
        this.setState({ transactionType: transactionType })
    }

    updateSource = (source) => {
        this.setState({ source: source })
    }

    updateDestination = (destination) => {
        this.setState({ destination: destination })
    }

    updateShipmentType = (shipmentType) => {
        this.setState({ shipmentType: shipmentType })
    }

    updateGroupId = (groupId) => {
        this.setState({ groupId: groupId })
    }

    isCompleted = () => {
        if (this.state.transactionType == '' || this.state.source == '' || this.state.destination == '' || this.state.shipmentType == '' || this.state.groupId.trim() == '') {
            return false
        } else {
            return true
        }
    }

    summary = () => {
        if (this.isCompleted()) {
            this.props.navigation.navigate(Constants.UploadSummary, { 'list': this.state.trackingList });
        } else {
            this.showCompleteAlert()
        }

    }

    home = () => {
        if (this.state.transactionType != '') {
            this.showExitAlert()
        } else {
            this.props.navigation.navigate(Constants.Home);
        }

    }

    chooseFile = () => {
        // TODO
        // Document Picker to be added
    }

    scanItem = () => {
        // TODO
        // Bar code Scanner To be added
    }

    getUnique(arr, comp) {

        const unique = arr.map(e => e[comp]).map((e, i, final) => final.indexOf(e) === i && i).filter(e => arr[e]).map(e => arr[e]);
        return unique;

    }

    upload = () => {
        if (this.isCompleted()) {
            if (this.state.trackingList.length > 0) {
                var count = 0

                this.getUnique(this.state.trackingList, 'key').map((id, key) => {
                    const pkg = new Package(id.key, this.state.source, this.state.destination, this.state.groupId, Constants.InTransit, Constants.PendingProcessing, this.state.transactionType, this.state.shipmentType, this.state.destination, (new Date).getTime())
                    // TODO
                    // Save the package in Database
                    count++
                })

                Alert.alert(
                    'Success:',
                    'Successfully added ' + count + ' records',
                    [
                        { text: 'Upload Again', onPress: this.reload },
                        { text: 'Home', onPress: () => { this.props.navigation.navigate(Constants.Home) } },
                    ],
                    { cancelable: false },
                )

            } else {
                Alert.alert(
                    'ERROR:',
                    'Nothing to Upload !!!',
                    [{ text: 'OK' }]
                )
            }
        } else {
            this.showCompleteAlert()
        }
    }

    reload = () => {
        this.setState(initialState)
        this.setState({ trackingList: [] })
    }

    showCompleteAlert = () => {
        Alert.alert(
            'ERROR:',
            'Please Complete the details',
            [{ text: 'OK' }],
        )
    }

    showExitAlert = () => {
        Alert.alert(
            'ALERT:',
            'Are you sure, you want to exit?',
            [
                { text: 'Yes', onPress: () => { this.props.navigation.navigate(Constants.Home) } },
                { text: 'Cancel' }]
            ,
        )
    }


    render() {

        return (
            <ScrollView>

                <View style={styles.container}>

                    <Heading
                        text='Manifest Upload'
                        image={uploadImage} />

                    <View >

                        <DropDown
                            text='Transaction Type :'
                            value={this.state.transactionType}
                            onSelect={this.updateTransactionType}
                            list={Constants.TransactionTypes}
                        />

                        <DropDown
                            text='Source Node :'
                            value={this.state.source}
                            onSelect={this.updateSource}
                            list={Constants.SCs}
                        />

                        <DropDown
                            text='Destination Node :'
                            value={this.state.destination}
                            onSelect={this.updateDestination}
                            list={Constants.FCs}
                        />

                        <DropDown
                            text='Shipment Type :'
                            value={this.state.shipmentType}
                            onSelect={this.updateShipmentType}
                            list={Constants.ShipmentTypes}
                        />


                        <View style={styles.card}>

                            <InputText
                                text='Challan No/ VRID'
                                placeholder='Challan No'
                                callBack={this.updateGroupId}
                                value={this.state.groupId}
                                textSize={17}
                                textMargin={1}
                                width={160}
                            />


                            <View style={styles.twoButtons}>
                                <Button
                                    onPress={this.chooseFile}
                                    title="Choose File"
                                    color="#ffc66c"
                                />

                                <Button
                                    onPress={this.scanItem}
                                    title="Scan Items"
                                    color="#ffc66c"
                                />
                            </View>

                            <View style={styles.summary}>
                                <Button
                                    onPress={this.summary}
                                    title="Summary !"
                                    color="grey"
                                />
                            </View>

                        </View>


                        <FooterButtons
                            onPrimaryButtonClick={this.home}
                            primaryButtonText='Home'
                            onSecondaryButtonClick={this.upload}
                            secondaryButtonText='Upload'
                        />

                    </View>
                </View>

            </ScrollView>
        );
    }
}