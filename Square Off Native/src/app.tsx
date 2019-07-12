import React from 'react';
import { StartScreen } from './Screens/Start';
import { HomeScreen } from './Screens/Home';
import { UploadScreen } from './Screens/Upload';
import { ReceiveScreen } from './Screens/Receive';
import { ProblemSolveScreen } from './Screens/ProblemSolve';
import { ProblemDetails } from './Screens/ProblemDetails';
import { UploadSummary } from './Screens/UploadSummary';
import { ReceiveSummary } from './Screens/ReceiveSummary';
import { DetailScreen } from './Screens/Details';
import { createStackNavigator } from 'react-navigation';
import * as Constants from './Classes/Constants';

const RootStack = createStackNavigator(
  {
    Start: StartScreen,
    Home: HomeScreen,
    Upload: UploadScreen,
    Receive: ReceiveScreen,
    ProblemSolve: ProblemSolveScreen,
    UploadSummary: UploadSummary,
    ReceiveSummary: ReceiveSummary,
    ProblemDetails: ProblemDetails,
    Detail: DetailScreen,
  },
  {
    initialRouteName: Constants.Start
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
