import { PRODUCTS } from "/src/data.js";

export const findProductById = (id) => {
	const key = Object.keys(PRODUCTS).find(
		(product) => PRODUCTS[product].id == id
	);
	return PRODUCTS[key];
};
