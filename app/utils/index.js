import firebaseAnalytics from '@react-native-firebase/analytics';

const analytics = () => firebaseAnalytics();

export const analyticsEvent = async (key, param = {}) => {
  analytics().logEvent(key, param);
};

export const analyticsScreen = async routeName => {
  analytics().logScreenView({
    screen_class: routeName,
    screen_name: routeName,
  });
};

export const analyticUserId = async userId => {
  analytics().setUserId({playerName: userId});
};

export const analyticsUserProperties = async property => {
  analytics().setUserProperties(property);
};
