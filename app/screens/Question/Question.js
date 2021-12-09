import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {analyticsEvent} from '../../utils';
import {Questions} from '../../constants';

const width = Dimensions.get('window').width;
const BASIC_COLOR = '#5568FE';
const BASIC_TRANSPARENT_COLOR = 'rgba(85, 105, 254, 0.1)';
const BASIC_BLACK = '#0A1931';

const ButtonAnswer = ({item, index, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: item.selected ? BASIC_COLOR : BASIC_TRANSPARENT_COLOR,
        width: '100%',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
      }}>
      <Text
        style={{
          fontSize: 20,
          color: item.selected ? 'white' : BASIC_BLACK,
          fontWeight: '600',
        }}>
        {item.option}. {item.valueOption}
      </Text>
    </TouchableOpacity>
  );
};

const Question = props => {
  const {navigation, route} = props;

  const questionType = route.params?.questionType ?? '';
  const analytic = route.params?.analytic ?? '';

  const [pageNumber, setPageNumber] = useState(1);
  const [dataQuestion, setDataQuestion] = useState(Questions(questionType));
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const flatlistRef = useRef();

  const navigateToHome = () => {
    analyticsEvent('back_to_home', {questionType: questionType});
    navigation.goBack();
    dataQuestion.map((item, index) => {
      dataQuestion[index].options.map((_item, _index) => {
        delete _item?.selected;
      });
    });
  };

  const onPressFAQ = () => {
    analyticsEvent('onPress_FAQ_Question');
  };

  const scrollToIndex = index => {
    flatlistRef?.current?.scrollToIndex({animated: true, index: index});
  };

  const onScrollEnd = e => {
    let pageNumberTemp = Math.min(
      Math.max(Math.floor(e.nativeEvent.contentOffset.x / width + 0.7) + 1, 0),
      dataQuestion.length,
    );

    setPageNumber(pageNumberTemp);
  };

  const nextQuestion = () => {
    if (pageNumber !== dataQuestion.length) {
      const {id: number, isRight} = selectedAnswer;

      console.log(number, isRight);
      analyticsEvent(`${analytic}_answer`, {
        numberQuestion: number,
        isRight: isRight.toString(),
      });

      scrollToIndex(pageNumber - 1 + 1);
      setSelectedAnswer('');
    } else {
    }
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
        ref={flatlistRef}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScrollEnd}
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
                {item?.options?.map((itemItem, indexIndex) => {
                  return (
                    <>
                      <ButtonAnswer
                        item={itemItem}
                        index={indexIndex}
                        onPress={() => {
                          const tempDataQuesttion = dataQuestion;
                          dataQuestion[index].options.map(
                            (itemLoop, indexLoop) => {
                              if (indexIndex === indexLoop) {
                                itemLoop.id = dataQuestion[index].id;
                                setSelectedAnswer(itemLoop);
                                return (itemLoop.selected = true);
                              } else {
                                return (itemLoop.selected = false);
                              }
                            },
                          );
                          setDataQuestion([...tempDataQuesttion]);
                        }}
                      />
                    </>
                  );
                })}
              </View>
            </View>
          );
        }}
      />

      <TouchableOpacity
        disabled={!selectedAnswer ? true : false}
        onPress={() => nextQuestion()}
        style={{
          backgroundColor: selectedAnswer
            ? BASIC_COLOR
            : BASIC_TRANSPARENT_COLOR,
          margin: 16,
          padding: 16,
          borderRadius: 8,
        }}>
        <Text style={{textAlign: 'center', fontWeight: '600', color: 'white'}}>
          {pageNumber === dataQuestion.length ? 'Selesai' : 'Selanjutnya'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Question;
