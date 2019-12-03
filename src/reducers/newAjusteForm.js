import {SET_FIELD_AJUSTE, AJUSTE_SAVED_SUCCESS} from '../actions';

const INITIAL_STATE = {
  code: '',
  date: '',
  justification: '',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD_AJUSTE:
      const clonedState = {...state};
      clonedState[action.field] = action.value;
      return clonedState;

    case AJUSTE_SAVED_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
}
