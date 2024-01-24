import React, { Component } from 'react';
import {
  BackHandler,
  Text,
  TextInput,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import HomeScreen from './src/screens/HomeScreen';

class App extends Component {
  constructor(props) {
    console.log = () => null;
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
    super(props);
    this.state = {
      isConnected: null,
      showHoldPopUp: false,
    };
  }

  componentDidMount = async () => {
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backAction);
  }

  backAction = async () => {
    if (store.getState().login.isLoggedIn == false) {
      this.setState({
        showHoldPopUp: true,
      });
    } else {
      BackHandler.exitApp();
    }
  };

  render() {
    const { showHoldPopUp } = this.state;
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}

export default App;
