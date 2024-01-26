import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import AddMaterialScreen from './src/screens/AddMaterialScreen';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
