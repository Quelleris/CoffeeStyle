import React from "react";
import { useParams } from "react-router-dom";
import { findProductById } from "../../utils/findProductById";

export default function ProductDetails() {
	const { productId } = useParams();
	const product = findProductById(productId);

	return (
		<>
			<div>kkk</div>
			<section className='details section'>
				<div className='container'>
					<div className='details__wrapper'>
						<img
							src={product.image}
							alt=''
							className='details__image'
						/>
						<div className='details__content'>
							<h1 className='details__title'>{product.name}</h1>
							<p className='details__description'>
								{product.details}
							</p>
							<p className='details__price'>
								$ {product.price}.00 USD
							</p>
							<div className='flex'>
								<input
									type='number'
									className='details__input'
								/>
								<button className='secondary-btn uppercase'>
									Add to card
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
