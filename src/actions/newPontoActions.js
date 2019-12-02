import firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value,
  };
};

export const PONTO_SAVED_SUCCESS = 'PONTO_SAVED_SUCCESS';

export const serieSavedSuccess = () => {
  return {
    type: PONTO_SAVED_SUCCESS,
  };
};

export const SET_ALL_FIELDS = 'SET_ALL_FIELDS';

export const setAllFields = ponto => ({
  type: SET_ALL_FIELDS,
  ponto: ponto,
});

export const RESET_FORM = 'RESET_FORM';

export const resetForm = () => ({
  type: RESET_FORM,
});

export const savePonto = ponto => {
  const {currentUser} = firebase.auth();

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
        .push(ponto);
    }

    dispatch(serieSavedSuccess());
  };
};
