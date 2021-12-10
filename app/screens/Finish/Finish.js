import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {MathScore, TotalScore} from '../../redux/actions';
import {analyticsEvent} from '../../utils';

const Finish = props => {
  const {navigation, route} = props;
  const BASIC_BLACK = '#0A1931';

  const dispatch = useDispatch();

  const analytic = route.params?.analytic ?? '';
  const score = route.params?.score ?? 0;
  const questionType = route.params?.questionType ?? '';

  const [selectedRating, setSelectedRating] = useState('senang');

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
          {`Anda Baru Saja Menyelesaikan \n Kuis ${questionType}`}
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
          NILAI : {score}
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
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
              onPress={() => setSelectedRating('tidak_senang')}
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
                  borderWidth: selectedRating === 'tidak_senang' ? 2 : 0,
                  borderColor: 'black',
                  borderRadius: 380,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectedRating('netral')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 16,
              }}>
              <Image
                source={require('../../assets/images/neutral-face.png')}
                style={{
                  height: 50,
                  width: 50,
                  bottom: 0,
                  right: 0,
                  zIndex: 1,
                  marginHorizontal: 8,
                  borderWidth: selectedRating === 'netral' ? 2 : 0,
                  borderColor: 'black',
                  borderRadius: 380,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectedRating('senang')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 16,
              }}>
              <Image
                source={require('../../assets/images/happy-face-with-enlarged-eyes.png')}
                style={{
                  height: 50,
                  width: 50,
                  bottom: 0,
                  right: 0,
                  zIndex: 1,
                  marginHorizontal: 8,

                  borderWidth: selectedRating === 'senang' ? 2 : 0,
                  borderColor: 'black',
                  borderRadius: 380,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          dispatch(TotalScore(score));
          navigation.navigate('Home');
          analyticsEvent('rating', {
            questionType: analytic,
            value: selectedRating,
          });
        }}
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
