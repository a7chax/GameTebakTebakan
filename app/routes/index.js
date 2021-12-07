import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UserRoute from './UserRoute';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User" headerMode>
        <Stack.Screen name="User" component={UserRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
