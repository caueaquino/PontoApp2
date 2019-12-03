import firebase from 'firebase';

export const SET_FIELD_PONTO = 'SET_FIELD_PONTO';

export const setFieldPonto = (field, value) => {
  return {
    type: SET_FIELD_PONTO,
    field,
    value,
  };
};

export const PONTO_SAVED_SUCCESS = 'PONTO_SAVED_SUCCESS';

export const pontoSavedSuccess = () => {
  return {
    type: PONTO_SAVED_SUCCESS,
  };
};

export const savePonto = ponto => {
  const {currentUser} = firebase.auth();

  const date_ponto = new Date().toString();

  return async dispatch => {
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/pontos`)
      .push({code: ponto.code, date: date_ponto, location: ponto.location});

    dispatch(pontoSavedSuccess());
  };
};
