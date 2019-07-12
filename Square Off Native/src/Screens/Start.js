import React from 'react';
import { styles } from '../Styles/StartStyle';
import { View, Image, Button } from 'react-native';
import logoImage from './Assets/Logo.png';
import * as Constants from '../Classes/Constants';
import truckImage from './Assets/startImage.png';


export class StartScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    render() {

        getStarted = () => {
            this.props.navigation.navigate(Constants.Home);
        }

        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image style={styles.logoImage} source={logoImage} />
                </View>

                <Image style={styles.gifImage} source={truckImage} />

                <View style={styles.startButton}>
                    <Button
                        onPress={getStarted}
                        title="Get Started !"
                        color="#FEBD69"
                    />
                </View>
            </View>
        );
    }
}
