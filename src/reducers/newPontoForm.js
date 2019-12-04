import {
  SET_FIELD_PONTO,
  PONTO_SAVED_SUCCESS,
  SET_ALL_FIELDS_PONTO,
  RESET_FORM_PONTO,
} from '../actions';
import pontoReducer from './pontoReducer';

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

    case SET_ALL_FIELDS_PONTO:
      return action.ponto;

    case RESET_FORM_PONTO:
      return INITIAL_STATE;

    default:
      return state;
  }
}
