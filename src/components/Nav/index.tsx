import Button from '../Button';

import './styles.css';

export interface INav {
	filters: any;
	active: any;
	changeActive: (data: any) => void;
}

const Nav = ({ filters, active, changeActive }: INav) => {

	const changeValueActive = (data: any) => {
		changeActive(data);
	}

	return (
		<div className='navbar'>
			{filters.map((value: any, index: number) => (
				<Button onClick={() => changeValueActive(value)} key={index} text={value.name} active={active.key === value.key} />
			))}
		</div>
	)
}

export default Nav