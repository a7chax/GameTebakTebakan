import React, {useEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';
import {QuestionCategory} from '../../constants';
import {useDispatch} from 'react-redux';
import {PlayerName} from '../../redux/actions';
// import analytics from '@react-native-firebase/analytics';
import {
  analyticsEvent,
  analyticsScreen,
  analyticsUserProperties,
} from '../../utils';

const capitalizedName = uniqueNamesGenerator({
  dictionaries: [colors, animals],
  style: 'capital',
  separator: '',
  length: 2,
});

const BASIC_COLOR = '#5568FE';
const BASIC_TRANSPARENT_COLOR = 'rgba(85, 105, 254, 0.1)';
const BASIC_BLACK = '#0A1931';

const COLORS = [
  '#CCE8FF',
  '#FFECDA',
  '#FEE0AE',
  '#E4D7FF',
  '#E6FFF0',
  '#FFF4FC',
  '#F1FFEE',
  '#FEDDF1',
  '#CCE8FF',
  '#E7FDE7',
];

const Home = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {playerName, totalScore} = useSelector(state => state.Game);

  useEffect(() => {
    if (!playerName) {
      dispatch(PlayerName(capitalizedName));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateToProfile = () => {
    navigation.navigate('Profile', {playerName: playerName});
    analyticsScreen('Profile');
  };

  const navigateToQuestion = (questionType = '', analytic = '') => {
    navigation.navigate('Question', {
      questionType: questionType,
      analytic: analytic,
    });
    analyticsEvent('go_to_question', {questionType: analytic});
    analyticsScreen('Question');
  };

  const Item = ({title, totalQuestion, analytic}) => (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS[Math.floor(Math.random() * 10 + 1) - 1],
        borderRadius: 8,
        marginBottom: 10,
        padding: 16,
      }}
      onPress={() => navigateToQuestion(title, analytic)}>
      <Text
        style={{
          color: 'grey',
          fontSize: 14,
          fontFamily: 'ReadexPro-Regular',
        }}>
        Jumlah Soal : {totalQuestion}
      </Text>
      <Text
        style={{
          color: BASIC_BLACK,
          fontSize: 28,
          lineHeight: 34,
          fontFamily: 'ReadexPro-SemiBold',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      totalQuestion={item.totalQuestion}
      analytic={item.analytic}
    />
  );

  useEffect(() => {
    analyticsUserProperties({
      totalScore: totalScore,
    });
  }, []);
  return (
    <ScrollView style={[styles.background, {flex: 1}]}>
      <Text
        style={{
          color: BASIC_COLOR,
          fontSize: 38,
          fontFamily: 'ReadexPro-Bold',
        }}>
        Let's Play
      </Text>
      <Text
        style={{
          color: 'grey',
          fontSize: 14,
          fontFamily: 'ReadexPro-Regular',
          marginTop: -10,
        }}>
        Be the first rank!
      </Text>
      <LinearGradient
        colors={['#5670F3', '#0BBDFF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          padding: 16,
          borderRadius: 16,
          height: 200,
          justifyContent: 'flex-end',
          zIndex: 0,
          marginTop: 16,
        }}>
        <Text style={{color: '#fff', fontFamily: 'ReadexPro-Regular'}}>
          Score: {totalScore}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'ReadexPro-SemiBold',
              fontSize: 38,
              lineHeight: 44,
              zIndex: 5,
            }}>
            {playerName}
          </Text>
          <TouchableOpacity
            style={{
              zIndex: 5,
              padding: 8,
              backgroundColor: 'rgba(0,0,0,0.1)',
              borderRadius: 8,
              marginLeft: 8,
            }}
            onPress={navigateToProfile}>
            <Icon name="pencil" size={28} color="#FFF" />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/images/Saly.png')}
          style={{
            height: 200,
            width: 170,
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 1,
          }}
        />
      </LinearGradient>

      <View>
        <Text
          style={{
            color: BASIC_BLACK,
            fontSize: 28,
            fontFamily: 'ReadexPro-SemiBold',
            marginTop: 16,
            marginBottom: 8,
          }}>
          Kategori :
        </Text>
      </View>
      <FlatList
        style={{marginBottom: 32}}
        data={QuestionCategory}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
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
