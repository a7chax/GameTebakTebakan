import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Question from '../screens/Question';
const Stack = createStackNavigator();

const basicOptions = () => ({
  headerShown: false,
});

const UserRoute = () => {
  return (
    <Stack.Navigator intialRouteName="Question">
      <Stack.Screen name="Home" component={Home} options={basicOptions()} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={basicOptions()}
      />
      <Stack.Screen
        name="Question"
        component={Question}
        options={basicOptions()}
      />
    </Stack.Navigator>
  );
};

export default UserRoute;
