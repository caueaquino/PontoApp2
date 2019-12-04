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

export const SET_ALL_FIELDS_PONTO = 'SET_ALL_FIELDS_PONTO';

export const setAllFieldsPonto = ponto => ({
  type: SET_ALL_FIELDS_PONTO,
  ponto: ponto,
});

export const RESET_FORM_PONTO = 'RESET_FORM_PONTO';

export const resetFormPonto = () => ({
  type: RESET_FORM_PONTO,
});

export const savePonto = ponto => {
  const {currentUser} = firebase.auth();

  const date_ponto = new Date().toString();

  return async dispatch => {
    if (ponto.id) {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/pontos/${ponto.id}`)
        .set(ponto);
    } else {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/pontos`)
        .push({code: ponto.code, date: date_ponto, location: ponto.location});
    }
    dispatch(pontoSavedSuccess());
  };
};
