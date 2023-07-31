import './styles.css';

export interface IButton {
	text: string;
	active?: boolean;
	onClick?: () => void;
}

const Button = ({ text, active, onClick }: IButton) => {
	return (
		<div onClick={onClick} className={!active ? 'button' : 'button-active'}>
			{text}
		</div>
	)
}

export default Button