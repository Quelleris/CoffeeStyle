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
	Newsletter,
} from "../components";
import { CartContextProvider } from "../context/cartContext";

export default function App() {
	return (
		<>
			<CartContextProvider>
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
				<Newsletter />
				<Footer />
			</CartContextProvider>
		</>
	);
}
