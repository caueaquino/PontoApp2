import {SET_PONTOS} from '../actions/pontoActions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_PONTOS:
      console.log(action.pontos);
      return action.pontos;

    default:
      return state;
  }
}
