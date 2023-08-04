import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
	user: null,
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload;
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.user = null;
		},
	},
});

export const { loginSuccess, logout } = loginSlice.actions;

export default loginSlice.reducer;