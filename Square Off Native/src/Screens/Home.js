import React from 'react';
import HomePageButton from '../Components/HomePageButton'
import { styles } from '../Styles/HomeStyle'
import * as Constants from '../Classes/Constants'
import { View } from 'react-native';
import uploadImage from './Assets/upload.png';
import receiveImage from './Assets/receive.png';
import problemSolveImage from './Assets/problem.png';


export class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    render() {

        onclick = (nextScreen) => {
            this.props.navigation.navigate(nextScreen);
        }
        return (
            <View style={styles.homeContainer} >

                <HomePageButton
                    image={uploadImage}
                    text='Manifest Upload'
                    onClick={onclick.bind(this, Constants.Upload)}
                />

                <HomePageButton
                    image={receiveImage}
                    text='Receive Package'
                    onClick={onclick.bind(this, Constants.Receive)}
                />

                <HomePageButton
                    image={problemSolveImage}
                    text='Problem Solve'
                    onClick={onclick.bind(this, Constants.ProblemSolve)}
                />

            </View>
        );
    }
}
