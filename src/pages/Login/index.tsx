import { useState } from 'react'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';

import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/modules/login';
import { validateEmail } from '../../utils/validation';

import TextInput from '../../components/Input';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import './styles.css';
import { styled } from '@mui/material/styles';

import { login } from '../../api';

const BpIcon = styled('span')(({ theme }) => ({
	borderRadius: 3,
	width: 20,
	height: 20,
	boxShadow:
		theme.palette.mode === 'dark'
			? '0 0 0 1px rgb(16 22 26 / 40%)'
			: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
	backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
	backgroundImage:
		theme.palette.mode === 'dark'
			? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
			: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
	'.Mui-focusVisible &': {
		outline: '2px auto rgba(19,124,189,.6)',
		outlineOffset: 2,
	},
	'input:hover ~ &': {
		backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
	},
	'input:disabled ~ &': {
		boxShadow: 'none',
		background:
			theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
	},
}));

const BpCheckedIcon = styled(BpIcon)({
	backgroundColor: '#137cbd',
	backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
	'&:before': {
		display: 'block',
		width: 20,
		height: 20,
		backgroundImage:
			"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
			" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
			"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
		content: '""',
	},
	'input:hover ~ &': {
		backgroundColor: '#106ba3',
	},
});

const Login = () => {
	const dispatch = useDispatch();
	const [credentials, setCredentials] = useState({ email: 'hola@hola.com', password: '' });
	const [privacy, setPrivacy] = useState(false);
	const [alert, setAlert] = useState({
		show: false,
		severity: 'error',
		msg: ''
	});

	const setData = (e: React.ChangeEvent<HTMLInputElement>) => {
		resetAlerts();
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
		if (name === 'password' && value.length < 7) {
			setAlert({ show: true, severity: 'error', msg: 'La contraseña debe tener al menos 7 caracteres' });
			return;
		} if (name === 'email' && !validateEmail(value)) {
			setAlert({ show: true, severity: 'error', msg: 'El email no es válido' });
			return;
		}
	}

	const resetAlerts = () => {
		setAlert({ show: false, severity: 'error', msg: '' });
	}

	const handleSubmit = async () => {
		if (credentials.email.length === 0 || credentials.password.length === 0) {
			setAlert({ show: true, severity: 'error', msg: 'Debes llenar todos los campos' });
			return;
		}
		if (alert.show) {
			return;
		}
		if (!privacy) {
			setAlert({ show: true, severity: 'error', msg: 'Debes aceptar los términos y condiciones' });
			return;
		}
		const data = await login();
		if (data.success) {
			const user = {
				...data,
				email: credentials.email,
				name: 'Oliver'
			}
			dispatch(loginSuccess(user));
			localStorage.setItem('user', JSON.stringify(user));
		} else {
			setAlert({ show: true, severity: 'error', msg: 'Ocurrio un problema, intentalo más tarde' });
		}
	}

	return (
		<Layout>
			<div>
				<h1 className='title'>Login</h1>
				<p className='subtitle'>¡Bienvenido!</p>
				<div className='container-form'>
					<TextInput
						id="email"
						name="email"
						type={'text'}
						labelComponent={<span className='labelInput'>Correo electrónico de DaCodes:</span>}
						value={credentials.email}
						onChange={setData}
					/>
					<TextInput
						id="password"
						name="password"
						labelComponent={<span className='labelInput'>Contraseña:</span>}
						type={'password'}
						value={credentials.password}
						onChange={setData}
					/>
					<div className='container-checkbox'>
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox
										sx={{
											'&:hover': { bgcolor: 'transparent' },
										}}
										onChange={() => {
											resetAlerts();
											setPrivacy(!privacy);
										}}
										checked={privacy}
										disableRipple
										color="default"
										checkedIcon={<BpCheckedIcon />}
										icon={<BpIcon />}
										inputProps={{ 'aria-label': 'Checkbox demo' }}
									/>
								}
								label="He leido y acepto los terminos y condiciones" />
						</FormGroup>
					</div>
					{(alert.show) && (
						<div className='alertError'>
							<Alert severity={'error'} variant="filled">{alert.msg}</Alert>
						</div>
					)}
					<Button onClick={handleSubmit} text={'Crear cuenta'} />
				</div>
			</div>
		</Layout>
	)
}

export default Login