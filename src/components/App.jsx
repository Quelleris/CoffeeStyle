import { Route, Routes } from "react-router-dom";
import { Home, About, Products, Blog, Contact } from "../components";

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/products' element={<Products />} />
			<Route path='/blog' element={<Blog />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	);
}
