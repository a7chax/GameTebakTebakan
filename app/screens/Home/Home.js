import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import analytics from '@react-native-firebase/analytics';

const Home = props => {
  const {navigation} = props;

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const analytic = async () => {
    analytics().logEvent('basket', {
      id: 3745092,
      item: 'mens grey t-shirt',
    });
  };

  const Item = ({title}) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.jumlahsoal}>Jumlah Soal : 10</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => <Item title={item} />;

  return (
    <ScrollView style={styles.background}>
      <View style={styles.scorebox}>
        <Text style={styles.totalnilai}>Total Nilai</Text>
        <Text style={styles.nilai}>10000</Text>
        <View style={styles.horizontalLine} />
        <TouchableOpacity onPress={navigateToProfile}>
          <Text style={styles.nama}>Arungi Cahaya</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.minibox}>
        <Text style={styles.textMinibox}>FAQ</Text>
      </View>

      <View>
        <Text style={styles.kategori}>Kategori :</Text>
        <FlatList
          data={['Matematika', 'Seni Budaya', 'Kimia', 'IPA']}
          renderItem={renderItem}
        />
      </View>
      {/* <Button title="Klik Ini" onPress={analytic} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {padding: 16, backgroundColor: 'white'},
  container: {
    flex: 1,
  },
  item: {
    // height: 90,
    borderRadius: 6,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    marginBottom: 4,
  },
  kategori: {
    fontSize: 24,
    color: 'black',
    marginBottom: 16,
    fontWeight: '700',
  },
  minibox: {
    marginVertical: 16,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  jumlahsoal: {color: 'black', fontWeight: '600'},
  textMinibox: {margin: 24, color: 'black', fontWeight: '700'},
  scorebox: {
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'column',
    width: '100%',
    padding: 16,
    borderRadius: 6,
  },
  totalnilai: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
    marginBottom: 16,
  },
  nama: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
  nilai: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    margin: 16,
  },
});

export default Home;
