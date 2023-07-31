import React from 'react';

import { Grid } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import logo from '../../assets/img/logo.png'
import userIcon from '../../assets/img/userIcon.png'
import './styles.css'

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../../store/modules/login';
const Header = () => {
	const dispatch = useDispatch();
	const loginState = useSelector((state: any) => state.login);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleLogout = () => {
		dispatch(logout())
		localStorage.removeItem('user');
	};

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		if (loginState.isLoggedIn) {
			setAnchorEl(event.currentTarget);
		} else {
			return;
		}
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={'header'}>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<div className={'header-logo'}>
						<img src={logo} alt={'logo'} />
					</div>
				</Grid>
				<Grid item xs={4} className='header-logo-flex-end'>
					<div className={'header-icon'}>
						<img src={userIcon} alt={'userIcon'} onClick={handleMenu} />
					</div>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorEl)}
						onClose={handleClose}
						className='menu-header'
					>
						<MenuItem onClick={handleLogout}>Salir</MenuItem>
					</Menu>
				</Grid>
			</Grid>
		</div>
	)
}

export default Header