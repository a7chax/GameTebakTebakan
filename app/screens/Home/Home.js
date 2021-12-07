import React from 'react';
import {View, Text, Button} from 'react-native';
import analytics from '@react-native-firebase/analytics';

const Home = () => {
  const onPress = async () => {
    console.log('logged');
    return await analytics().logEvent('basket', {
      id: 3745092,
      item: 'mens grey t-shirt',
    });
  };
  return (
    <View>
      <Button title="Klik Ini" onPress={onPress} />
    </View>
  );
};

export default Home;
