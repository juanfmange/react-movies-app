import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './modules/login';

const movies = configureStore({
	reducer: {
		login: loginReducer,
	},
});

export default movies;