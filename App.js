import React from 'react';
import Routes from './app/routes';
import ConfigureStore from './app/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import 'react-native-gesture-handler';

const App = () => {
  const {store, persistor} = ConfigureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
