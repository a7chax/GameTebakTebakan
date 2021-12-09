import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

const Finish = props => {
  const {navigation} = props;
  const BASIC_BLACK = '#0A1931';

  return (
    <ScrollView
      style={{
        backgroundColor: '#8FC6FF',
        padding: 16,
        flexDirection: 'column',
      }}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 26,
            fontFamily: 'ReadexPro-SemiBold',
            color: BASIC_BLACK,
          }}>
          SELAMAT
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'ReadexPro-Regular',
            color: BASIC_BLACK,
            lineHeight: 27,
            marginTop: 16,
          }}>
          {'Anda Baru Saja Menyelesaikan \n Kuis Matematika'}
        </Text>

        <Image
          source={require('../../assets/images/manAtRocket.png')}
          style={{
            height: 270,
            width: 200,
            bottom: 0,
            right: 0,
            zIndex: 1,
            alignSelf: 'center',
          }}
        />

        <Text
          style={{
            color: 'black',
            fontSize: 28,
            textAlign: 'center',
            margin: 32,
            fontFamily: 'ReadexPro-SemiBold',
          }}>
          NILAI : 80
        </Text>
        <View style={{backgroundColor: 'white', padding: 16, borderRadius: 8}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'ReadexPro-SemiBold',
              color: BASIC_BLACK,
              fontSize: 20,
            }}>
            Nilai Kami
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'ReadexPro-SemiBold',
              color: BASIC_BLACK,
            }}>
            Kami senang mendengar anda, bagaimana pengalaman anda ketika
            mengerjakan soal ini ?
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 16,
            }}>
            <Image
              source={require('../../assets/images/confused-face.png')}
              style={{
                height: 50,
                width: 50,
                bottom: 0,
                right: 0,
                zIndex: 1,
                marginHorizontal: 8,
                alignSelf: 'center',
              }}
            />
            <Image
              source={require('../../assets/images/neutral-face.png')}
              style={{
                height: 50,
                width: 50,
                bottom: 0,
                right: 0,
                zIndex: 1,
                marginHorizontal: 8,

                alignSelf: 'center',
              }}
            />
            <Image
              source={require('../../assets/images/happy-face-with-enlarged-eyes.png')}
              style={{
                height: 50,
                width: 50,
                bottom: 0,
                right: 0,
                zIndex: 1,
                marginHorizontal: 8,

                alignSelf: 'center',
              }}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: '#33f283',
          borderRadius: 8,
          marginTop: 32,
          padding: 14,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontFamily: 'ReadexPro-SemiBold',
          }}>
          Beranda
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Finish;
