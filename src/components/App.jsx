import { Route, Routes } from "react-router-dom";
import {
	Navbar,
	Footer,
	Home,
	About,
	Products,
	Blog,
	Contact,
	ProductDetails,
} from "../components";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/products' element={<Products />} />
				<Route
					path='/products/:productId'
					element={<ProductDetails />}
				/>
				<Route path='/blog' element={<Blog />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}
