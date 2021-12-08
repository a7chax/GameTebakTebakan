import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import UserRoute from './UserRoute';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const basicOptions = () => ({
  headerShown: false,
});

const Routes = () => {
  const {isNameChanged} = useSelector(state => state.Game);

  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName={isNameChanged ? 'User' : 'Profile'}>
        <React.Fragment>
          <Stack.Screen
            name="User"
            component={UserRoute}
            options={basicOptions()}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={basicOptions()}
          />
        </React.Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
