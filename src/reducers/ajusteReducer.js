import {SET_AJUSTES} from '../actions/ajusteActions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_AJUSTES:
      console.log(action.ajutes);
      return action.ajustes;

    default:
      return state;
  }
}
