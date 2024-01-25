import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';

const App = () => {
  return (
    <Provider store={store}>
      <CategoryScreen />
    </Provider>
  );
};

export default App;
