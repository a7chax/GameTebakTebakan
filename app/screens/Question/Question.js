import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableOpacityBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {analyticsEvent} from '../../utils';
import {Questions} from '../../constants';

const width = Dimensions.get('window').width;
const BASIC_COLOR = '#5568FE';
const BASIC_TRANSPARENT_COLOR = 'rgba(85, 105, 254, 0.1)';
const BASIC_BLACK = '#0A1931';

const Question = props => {
  const {navigation, route} = props;

  const questionType = route.params?.questionType ?? '';

  const [pageNumber, setPageNumber] = useState(1);
  const [dataQuestion, setDataQuestion] = useState(Questions(questionType));

  const navigateToHome = () => {
    analyticsEvent('back_to_home', {questionType: questionType});
    navigation.goBack();
  };

  const onPressFAQ = () => {
    analyticsEvent('onPress_FAQ_Question');
  };

  const onScrollEnd = e => {
    let pageNumberTemp = Math.min(
      Math.max(Math.floor(e.nativeEvent.contentOffset.x / width + 0.7) + 1, 0),
      dataQuestion.length,
    );
    setPageNumber(pageNumberTemp);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 70,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigateToHome()}>
          <Icon
            style={{margin: 16}}
            name="arrow-back-outline"
            size={24}
            color={BASIC_BLACK}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            color: BASIC_BLACK,
            fontWeight: '500',
          }}>
          {questionType}
        </Text>
        <TouchableOpacity onPress={onPressFAQ}>
          <Icon
            style={{marginHorizontal: 16, marginVertical: 8}}
            name="help-circle-outline"
            size={28}
            color={BASIC_BLACK}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 16, flexDirection: 'row'}}>
        <View
          style={{
            width: `${(pageNumber / dataQuestion.length) * 100}%`,
            backgroundColor: BASIC_COLOR,
            height: 2,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: BASIC_TRANSPARENT_COLOR,
            height: 2,
          }}
        />
      </View>
      <View style={{padding: 16, paddingBottom: 4}}>
        <Text style={{fontSize: 16, color: BASIC_COLOR, fontWeight: 'bold'}}>
          Pertanyaan {pageNumber}/{dataQuestion.length}
        </Text>
      </View>
      <FlatList
        data={dataQuestion}
        pagingEnabled
        horizontal
        bounces={false}
        onMomentumScrollEnd={onScrollEnd}
        renderItem={({item, index}) => {
          return (
            <View style={{width, padding: 16, paddingTop: 0}}>
              <Text
                style={{
                  fontSize: 24,
                  color: BASIC_BLACK,
                  fontWeight: 'bold',
                }}>
                {item.question}
              </Text>

              <View style={{marginTop: 20}}>
                {item.options.map((e, i) => {
                  return (
                    <TouchableOpacity
                      style={{
                        backgroundColor:
                          i !== 0 ? BASIC_TRANSPARENT_COLOR : BASIC_COLOR,
                        width: '100%',
                        padding: 16,
                        marginBottom: 12,
                        borderRadius: 8,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: i !== 0 ? BASIC_BLACK : 'white',
                          fontWeight: '600',
                        }}>
                        {e.option}. {e.valueOption}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        }}
      />

      <TouchableOpacity>
        <Text>asdfasdf</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Question;
