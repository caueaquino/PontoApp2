import firebase from 'firebase';
import {Alert} from 'react-native';

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

export const deleteAjuste = ajuste => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Exclusão',
        `Deseja excluir o ajuste ${ajuste.code}?`,
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
                  .ref(`/users/${currentUser.uid}/ajustes/${ajuste.id}`)
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
