import firebase from 'firebase';

export const SET_PONTOS = 'SET_PONTOS';

const setPontos = pontos => ({
  type: SET_PONTOS,
  pontos: pontos,
});

export const watchPontos = () => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/pontos`)
      .on('value', snapshot => {
        const pontos = snapshot.val();
        const action = setPontos(pontos);
        dispatch(action);
      });
  };
};
