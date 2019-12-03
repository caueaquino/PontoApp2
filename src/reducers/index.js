import {combineReducers} from 'redux';
import userReducer from './userReducer';
import newPontoForm from './newPontoForm';
import newAjusteForm from './newAjusteForm';
import PontoReducer from './pontoReducer';
import AjusteReducer from './ajusteReducer';

export default combineReducers({
  user: userReducer,
  pontoForm: newPontoForm,
  ajusteForm: newAjusteForm,
  listaPontos: PontoReducer,
  listaAjustes: AjusteReducer,
});
