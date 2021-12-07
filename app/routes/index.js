import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UserRoute from './UserRoute';

const Stack = createStackNavigator();

const basicOptions = () => ({
  headerShown: false,
});

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User">
        <Stack.Screen
          name="User"
          component={UserRoute}
          options={basicOptions()}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
