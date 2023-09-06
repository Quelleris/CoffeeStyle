import React from "react";
import products from "../data.json";
import Product from "./Product";

export default function ProductList() {
	return (
		<section className='product section' id='product' aria-label='product'>
			<div className='container'>
				<ul className='grid-list product-list' data-filter='all'>
					{products.map((product) => {
						return (
							<li key={product.id} className='product-list-item'>
								<Product product={product} />
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
