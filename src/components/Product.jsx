import React from "react";

export default function Product({ product }) {
	return (
		<div className='product-card'>
			<a href='#' className='card-banner img-holder'>
				<img
					src={product.image}
					alt={product.alt}
					className='img-cover'
				/>

				<ul className='card-action-list flex'>
					<li>
						<button
							className='card-action-btn'
							aria-label='add to card'
							title='add to card'
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
			</a>

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
					{/* <span className='price clr-neutral-300 line-through'>
						$ 99.00 USD
					</span> */}
				</div>
			</div>
		</div>
	);
}
