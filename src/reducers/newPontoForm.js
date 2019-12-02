import {
  SET_FIELD,
  PONTO_SAVED_SUCCESS,
  SET_ALL_FIELDS,
  RESET_FORM,
} from '../actions';

const INITIAL_STATE = {
  id: null,
  date: new Date(),
  location: 'UTFPR',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD:
      const clonedState = {...state};
      clonedState[action.field] = action.value;
      return clonedState;

    case PONTO_SAVED_SUCCESS:
      return INITIAL_STATE;

    case SET_ALL_FIELDS:
      return action.serie;

    case RESET_FORM:
      return INITIAL_STATE;

    default:
      return state;
  }
}
