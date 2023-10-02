import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export default function Product({ product }) {
	const { addItemToCart } = useContext(CartContext);

	return (
		<div className='product-card'>
			<div className='card-wrapper'>
				<Link
					to={`/products/${product.id}`}
					className='card-banner img-holder'
				>
					<img
						src={product.image}
						alt={product.alt}
						className='img-cover'
					/>
				</Link>
				<ul className='card-action-list flex'>
					<li>
						<button
							className='card-action-btn'
							aria-label='add to card'
							title='add to card'
							onClick={() => addItemToCart(product.id)}
						>
							<ion-icon
								name='bag-outline'
								aria-hidden='true'
							></ion-icon>
						</button>
					</li>
					<li>
						<button
							className='card-action-btn'
							aria-label='add to wishlist'
							title='add to wishlist'
						>
							<ion-icon
								name='heart-outline'
								aria-hidden='true'
							></ion-icon>
						</button>
					</li>
				</ul>
			</div>

			<div className='card-content'>
				<h3>
					<a href='#' className='card-title'>
						{product.name}
					</a>
				</h3>

				<div className='price-wrapper flex flex-ai-c flex-jc-c'>
					<data
						className='discounted-price clr-secondary-400'
						value='59'
					>
						$ {product.price} USD
					</data>
				</div>
			</div>
		</div>
	);
}
