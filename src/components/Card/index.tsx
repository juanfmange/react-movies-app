import Rating from '@mui/material/Rating';

import './styles.css';

export interface ICard {
	dataCard: {
		adult: boolean,
		backdrop_path: string,
		genre_ids: any,
		id: number,
		original_language: string,
		original_title: string,
		overview: string,
		popularity: number,
		poster_path: string,
		release_date: string,
		title: string,
		video: boolean,
		vote_average: number,
		vote_count: number
	}
}
const URL_IMAGE = import.meta.env.VITE_URL_IMAGE

const index = ({ dataCard }: ICard) => {
	return (
		<div className='card' style={{ backgroundImage: 'url(' + URL_IMAGE + dataCard.poster_path + ')' }}>
			<div className='card-content'>
				<div>
					<h4>{dataCard.title}</h4>
					<h6>{dataCard.release_date} ‧ Acción/Aventura ‧ 2h 10m</h6>
					<p>
						{dataCard.overview.length > 200 ? dataCard.overview.slice(0, 200) + '...' : dataCard.overview}
					</p>
					<div className='rating'>
						<Rating name="read-only" size={'large'} value={dataCard.vote_average / 2} readOnly precision={0.5} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default index