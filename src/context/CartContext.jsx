import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/data";

export const CartContext = createContext(null);

const getDefaultCart = () => {
	let cart = {};
	PRODUCTS.forEach((product) => {
		cart[product.id] = 0;
	});
	return cart;
};

export function CartContextProvider(props) {
	const [cartItems, setCartItems] = useState(() => getDefaultCart());

	function addItemToCart(itemId) {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	}

	function removeItemFromCart(itemId) {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	}

	return (
		<CartContext.Provider
			value={{ cartItems, addItemToCart, removeItemFromCart }}
		>
			{props.children}
		</CartContext.Provider>
	);
}
