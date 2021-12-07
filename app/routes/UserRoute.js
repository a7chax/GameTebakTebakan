import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile/Profile';
const Stack = createStackNavigator();

const basicOptions = () => ({
  headerShown: false,
});

const UserRoute = () => {
  return (
    <Stack.Navigator intialRouteName="Profile">
      <Stack.Screen name="Home" component={Home} options={basicOptions()} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={basicOptions()}
      />
    </Stack.Navigator>
  );
};

export default UserRoute;
