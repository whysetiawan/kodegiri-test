import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import store from './src/redux/store';
import RootRouter from './src/routes';

const MainApp: React.FC = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};

export default MainApp;
