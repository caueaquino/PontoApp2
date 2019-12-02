import {combineReducers} from 'redux';
import userReducer from './userReducer';
import newPontoForm from './newPontoForm';
import PontoReducer from './pontoReducer';

export default combineReducers({
  user: userReducer,
  pontoForm: newPontoForm,
  listaPontos: PontoReducer,
});
