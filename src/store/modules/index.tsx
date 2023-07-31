import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './login';

const rootReducer = combineReducers({
	login: loginReducer,
});

export default rootReducer;