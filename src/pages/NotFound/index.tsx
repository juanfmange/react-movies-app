import Button from '../../components/Button';

import './styles.css';
import image from '../../assets/img/notfound.jpg';

const NotFound = () => {
	return (
		<div className="not-found">
			<div className="not-found-container">
				<img src={image} alt="not-found" />
				<Button onClick={() => (window.location.href = '/')} text={'Home'} active={true} />
			</div>
		</div>
	)
}

export default NotFound