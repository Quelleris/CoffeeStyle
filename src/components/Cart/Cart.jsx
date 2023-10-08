import { React, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { PRODUCTS } from "../../data/data";

export default function Cart({ cartOpen, setCartOpen }) {
	const { cartItems } = useContext(CartContext);
	return (
		<div className={`cart ${cartOpen ? "active" : ""}`}>
			<div className='cart__header flex flex-jc-sb flex-ai-c'>
				<p className='uppercase clr-neutral-100'>Your Cart</p>
				<button
					className='close-cart-btn'
					aria-label='close cart'
					onClick={() => {
						setCartOpen(false);
					}}
				></button>
			</div>
			<ul className='cart__list'>
				{PRODUCTS.map((product) => {
					if (cartItems[product.id] !== 0) {
						return (
							<li key={product.id} className='cart__item'>
								<div className='flex flex-jc-sb flex-ai-c'>
									<img
										src={product.image}
										className='cart__item__image'
										alt=''
									/>
									<div>
										<h3 className='cart__item__title'>
											{product.name}
										</h3>
										<p className='clr-neutral-100 cart__item__price'>
											{product.price} USD
										</p>
									</div>
									<input
										type='number'
										className='cart__item__amount'
									/>
								</div>
							</li>
						);
					}
				})}
			</ul>
			<div className='cart__checkout'>
				<div className='flex flex-jc-sb flex-ai-c'>
					<p className='clr-neutral-100'>Total: </p>
					<p className='clr-neutral-100'>0 USD</p>
				</div>
			</div>
		</div>
	);
}
