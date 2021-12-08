export const PlayerName = data => {
  return dispatch => {
    return dispatch({type: 'PLAYER_NAME', payload: data});
  };
};

export const TotalScore = () => {
  return {
    type: 'TOTAL_SCORE',
  };
};

export const MathScore = data => {
  return dispatch => {
    return dispatch({type: 'MATH_SCORE', payload: data});
  };
};

export const MathQuestion = () => {
  return {
    type: 'MATH_QUESTION',
  };
};

export const ArtCultureScore = data => {
  return dispatch => {
    return dispatch({type: 'ART_CULTURE_SCORE', payload: data});
  };
};

export const EnglishScore = data => {
  return dispatch => {
    return dispatch({type: 'ENGLISH_SCORE', payload: data});
  };
};

export const BahasaScore = data => {
  return dispatch => {
    return dispatch({type: 'BAHASA_SCORE', payload: data});
  };
};
