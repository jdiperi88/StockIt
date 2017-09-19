import { combineReducers } from 'redux';

//changin reducer component name to form 
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import stockReducer from './stock_reducer';

const rootReducer = combineReducers({
  //also can be written as just form given es6 syntax
  //form: form
  form: form,
  auth: authReducer,
  stock: stockReducer

});

export default rootReducer;
