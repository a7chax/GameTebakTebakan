import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Question = props => {
  return (
    <ScrollView style={{padding: 16, backgroundColor: 'white'}}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
              Matematika
            </Text>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
              Matematika
            </Text>
          </View>

          <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
            1/10
          </Text>
        </View>
      </View>

      <View style={{marginTop: 36}}>
        <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
          Aporisma artinya bersifat maksimal, sinonimnya maksimal
        </Text>
      </View>
    </ScrollView>
  );
};

export default Question;
