import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Header from './components/Header';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<SingleProduct />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
