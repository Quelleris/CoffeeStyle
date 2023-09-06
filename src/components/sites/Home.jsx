import React from "react";
import { Navbar, Hero, ProductList } from "../index.js";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<ProductList />
			</main>
		</>
	);
}
