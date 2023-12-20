import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';
import { Pizza } from './pages/Pizza/Pizza';

export const App = () => {
  
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/:category" element={<Home />} />
			<Route path="/pizza/:id" element={<Pizza />} />
		</Routes>
	);
};
  