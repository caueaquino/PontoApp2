import {SET_FIELD_PONTO, PONTO_SAVED_SUCCESS} from '../actions';

const INITIAL_STATE = {
  code: '',
  date: '',
  location: '',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD_PONTO:
      const clonedState = {...state};
      clonedState[action.field] = action.value;
      return clonedState;

    case PONTO_SAVED_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
}
