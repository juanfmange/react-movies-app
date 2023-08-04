import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/routes';

import { Provider } from 'react-redux';
import movies from './movies';

function App() {

	return (
		<Provider store={movies}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	)
}

export default App
