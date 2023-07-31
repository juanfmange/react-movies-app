import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginPage from '../pages/Login';
import Principal from '../pages/Home';
import NotFound from '../pages/NotFound';

import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/modules/login';

export const Router = () => {
	const loginState = useSelector((state: any) => state.login);
	const dispatch = useDispatch();
	useEffect(() => {
		const user = localStorage.getItem('user');
		if (user !== null && user !== undefined && user !== '') {
			dispatch(loginSuccess(JSON.parse(user)));
		}
	}, []);

	return (
		<Routes>
			<Route
				path="/"
				element={loginState.isLoggedIn ? <Navigate to="inicio" /> : <LoginPage />}
			/>
			<Route
				path="login"
				element={loginState.isLoggedIn ? <Navigate to="/" /> : <LoginPage />}
			/>
			<Route
				path="inicio"
				element={loginState.isLoggedIn ? <Principal /> : <Navigate to="/" />}
			/>
			<Route
				path="404"
				element={<NotFound />}
			/>
			<Route
				path="*"
				element={<NotFound />}
			/>
		</Routes>
	);
};
