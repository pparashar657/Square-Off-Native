import React from 'react';
import { styles } from '../Styles/UploadSummaryStyles';
import { View, TouchableOpacity, TextInput, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { SummaryList } from '../Components/SummaryList';
import Heading from '../Components/Heading';
import addImage from './Assets/add.png';

export class UploadSummary extends React.Component {

    static navigationOptions = {
        header: null,
    };
    state = {
        isClicked: false,
        textInput_Holder: '',
        list: this.props.navigation.state.params.list,
    }
    onAddClick = () => {
        this.setState({ isClicked: !this.state.isClicked })
    }

    onClick = () => {
        if (this.state.textInput_Holder.trim() != '') {
            this.child.joinData(this.state.textInput_Holder.trim())
            this.setState({ isClicked: !this.state.isClicked })
            this.setState({ textInput_Holder: '' })
        }
    }

    render() {
        return (

            <View style={styles.Container}>

                <Heading text='Upload Summary' />

                <TouchableWithoutFeedback
                    onPress={this.onAddClick}>
                    <Image
                        style={styles.addImage}
                        source={addImage} />
                </TouchableWithoutFeedback>

                <View style={styles.MainContainer}>
                    <SummaryList
                        onRef={ref => (this.child = ref)}
                        clickable={true}
                        list={this.state.list}
                    />

                    {
                        this.state.isClicked &&
                        <View style={styles.input}>
                            <TextInput
                                placeholder="Enter Value Here"
                                onChangeText={data => this.setState({ textInput_Holder: data })}
                                style={styles.textInputStyle}
                                underlineColorAndroid='transparent'
                            />

                            <TouchableOpacity onPress={this.onClick} style={styles.button} >
                                <Text style={styles.buttonText}> Add a new Tracking ID </Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>

            </View>

        );
    }
}