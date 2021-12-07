import React, {useState} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';

const Profile = props => {
  const {navigation} = props;

  const [name, setName] = useState('Random');

  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{marginHorizontal: 16, marginVertical: '50%'}}>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 16,
          fontWeight: '600',
          color: 'black',
          fontSize: 24,
          // marginBottom: 32,
        }}>
        Masukkan Nama Anda
      </Text>
      <TextInput
        style={{
          height: 50,
          borderWidth: 2,
          padding: 10,
          borderRadius: 6,
          fontWeight: '700',
          marginBottom: 8,
        }}
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        onPress={navigateToHome}
        style={{
          marginTop: 8,
          borderRadius: 6,
          alignSelf: 'center',
          borderWidth: 2,
          backgroundColor: 'black',
          width: '100%',
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            marginVertical: 16,
            fontWeight: '600',
          }}>
          SUBMIT
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;
