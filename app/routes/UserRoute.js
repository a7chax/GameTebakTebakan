import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Question from '../screens/Question';
import Finish from '../screens/Finish';

const Stack = createStackNavigator();

const basicOptions = () => ({
  headerShown: false,
});

const UserRoute = () => {
  return (
    <Stack.Navigator intialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} options={basicOptions()} />

      <Stack.Screen
        name="Question"
        component={Question}
        options={basicOptions()}
      />

      <Stack.Screen name="Finish" component={Finish} options={basicOptions()} />
    </Stack.Navigator>
  );
};

export default UserRoute;
