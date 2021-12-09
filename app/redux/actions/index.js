export const PlayerName = data => {
  return dispatch => {
    return dispatch({type: 'PLAYER_NAME', payload: data});
  };
};

export const TotalScore = data => {
  return dispatch => {
    return dispatch({type: 'TOTAL_SCORE', payload: data});
  };
};
