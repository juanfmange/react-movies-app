import './styles.css';

export interface IButton {
	text: string;
	active?: boolean;
	onClick?: () => void;
	disabled?: boolean;
}

const Button = ({ text, active, onClick, disabled }: IButton) => {
	const handleOnClick = () => {
		if(!disabled && onClick) {
			onClick()
		}
	}
	return (
		<div onClick={handleOnClick} className={disabled ? 'button-disabled' : !active ? 'button' : 'button-active'}>
			{text}
		</div>
	)
}

export default Button