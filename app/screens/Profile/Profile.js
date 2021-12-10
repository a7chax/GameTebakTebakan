import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {PlayerName} from '../../redux/actions';

const Profile = props => {
  const {navigation, route} = props;

  const playerName = route.params?.playerName ?? '';

  const [name, setName] = useState(playerName);

  const dispatch = useDispatch();

  const navigateToHome = () => {
    dispatch(PlayerName(name));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Masukkan Nama Anda</Text>
      <TextInput
        style={styles.fieldInput}
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity onPress={navigateToHome} style={styles.buttonSubmit}>
        <Text style={styles.textButton}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 16, marginVertical: '50%'},
  label: {
    textAlign: 'center',
    marginVertical: 16,
    fontWeight: '600',
    color: 'black',
    fontSize: 24,
    // marginBottom: 32,
  },
  fieldInput: {
    height: 50,
    borderWidth: 2,
    padding: 10,
    borderRadius: 6,
    fontWeight: '700',
    marginBottom: 8,
  },
  buttonSubmit: {
    marginTop: 8,
    borderRadius: 6,
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '100%',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 16,
    fontWeight: '600',
  },
});
export default Profile;
