import firebase from 'firebase';
import {Alert} from 'react-native';

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

export const deletePonto = ponto => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Exclusão',
        `Deseja excluir o ponto ${ponto.code}?`,
        [
          {
            text: 'Não',
            onPress: () => {
              resolve(false);
            },
            style: 'cancel', //IOS
          },
          {
            text: 'Sim',
            onPress: async () => {
              const {currentUser} = firebase.auth();

              try {
                await firebase
                  .database()
                  .ref(`/users/${currentUser.uid}/pontos/${ponto.id}`)
                  .remove();

                resolve(true);
              } catch (e) {
                reject(e);
              }
            },
          },
        ],
        {cancelable: false},
      );
    });
  };
};
