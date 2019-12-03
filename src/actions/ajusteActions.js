import firebase from 'firebase';

export const SET_AJUSTES = 'SET_AJUSTES';

const setAjustes = ajustes => ({
  type: SET_AJUSTES,
  ajustes: ajustes,
});

export const watchAjustes = () => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/ajustes`)
      .on('value', snapshot => {
        const ajustes = snapshot.val();
        const action = setAjustes(ajustes);
        dispatch(action);
      });
  };
};
