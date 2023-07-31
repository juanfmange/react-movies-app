import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export interface ILoader {
	active: boolean;
}

const Loader = ({ active }: ILoader) => {
	const [open, setOpen] = useState(active);

	useEffect(() => {
		setOpen(open);
	}, [active])

	return (
		<div>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={open}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
}

export default Loader;