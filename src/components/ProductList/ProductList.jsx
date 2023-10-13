import React from "react";
import { PRODUCTS } from "/src/data/data.js";
import Product from "../Product/Product";

export default function ProductList() {
	return (
		<div className='container'>
			<ul className='grid-list product-list' data-filter='all'>
				{PRODUCTS.map((product) => {
					return (
						<li key={product.id} className='product-list-item'>
							<Product product={product} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}
