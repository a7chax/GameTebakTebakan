const initialState = {
  totalScore: 0,
  mathScore: 0,
  bahasaScore: 0,
  englishScore: 0,
  artCultureScore: 0,
  playerName: '',
  isNameChanged: false,
};

const Game = (state = initialState, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case 'PLAYER_NAME':
      return {
        ...state,
        playerName: payload,
        isNameChanged: true,
      };
    case 'TOTAL_SCORE':
      return {
        ...state,
        totalScore: state.totalScore + payload,
      };
    case 'MATH_SCORE':
      return {
        ...state,
        mathScore: payload,
      };
    case 'BAHASA_SCORE':
      return {
        ...state,
        bahasaScore: payload,
      };
    case 'ENGLISH_SCORE':
      return {
        ...state,
        bahasaScore: payload,
      };
    case 'ART_CULTURE_SCORE':
      return {
        ...state,
        bahasaScore: payload,
      };
    default:
      return state;
  }
};

export default Game;
