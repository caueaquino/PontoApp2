import firebase from 'firebase';

export const SET_FIELD_AJUSTE = 'SET_FIELD_AJUSTE';

export const setFieldAjuste = (field, value) => {
  return {
    type: SET_FIELD_AJUSTE,
    field,
    value,
  };
};

export const AJUSTE_SAVED_SUCCESS = 'AJUSTE_SAVED_SUCCESS';

export const ajusteSavedSuccess = () => {
  return {
    type: AJUSTE_SAVED_SUCCESS,
  };
};

export const SET_ALL_FIELDS_AJUSTE = 'SET_ALL_FIELDS_AJUSTE';

export const setAllFields = ajuste => ({
  type: SET_ALL_FIELDS_AJUSTE,
  ajuste: ajuste,
});

export const RESET_FORM_AJUSTE = 'RESET_FORM_AJUSTE';

export const resetFormAjuste = () => ({
  type: RESET_FORM_AJUSTE,
});

export const saveAjuste = ajuste => {
  const {currentUser} = firebase.auth();

  const date_ajuste = new Date().toString();

  return async dispatch => {
    if (ajuste.id) {
      await firebase.database
        .ref(`/users/${currentUser.uid}/ajustes/${ajuste.id}`)
        .set(ajuste);
    } else {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/ajustes`)
        .push({
          code: ajuste.code,
          date: date_ajuste,
          justification: ajuste.justification,
        });
    }
    dispatch(ajusteSavedSuccess());
  };
};
