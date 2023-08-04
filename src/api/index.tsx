import axios from 'axios';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTgxMGE4MDIyZWUyYTY0MjRiZDE4MjEwOTIxZjJmZSIsInN1YiI6IjY0YzczY2VhNjNlNmZiMDExYjNhZmJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n_d-HyyxeY-3S_roE32bvHys4nxga2S_nhVYsZsJWDM';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${TOKEN}`
	}
};

export const getItems = async (filter: any, page: any) => {
	try {
		const response = await axios.get(`https://api.themoviedb.org/3/movie/${filter}?language=es-ES&page=${page}`, options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const login = async () => {
	try {
		const response = await axios.get(`https://api.themoviedb.org/3/authentication/guest_session/new`, options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}