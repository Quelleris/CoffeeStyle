import { React, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { PRODUCTS } from "../../data/data";

export default function Cart({ cartOpen, setCartOpen }) {
	const { cartItems } = useContext(CartContext);

	return (
		<div className={`cart ${cartOpen ? "active" : ""}`}>
			<div className='cart__header'>
				<div className='container flex flex-jc-sb flex-ai-c'>
					<p className='uppercase clr-neutral-100'>Your Cart</p>
					<button
						className='close-cart-btn'
						aria-label='close cart'
						onClick={() => {
							setCartOpen(false);
						}}
					>
						<svg
							viewPort='0 0 12 12'
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
						>
							<line
								x1='0'
								y1='14'
								x2='14'
								y2='0'
								stroke='white'
								stroke-width='2'
							/>
							<line
								x1='0'
								y1='0'
								x2='14'
								y2='14'
								stroke='white'
								stroke-width='2'
							/>
						</svg>
					</button>
				</div>
			</div>
			<ul className='cart__list container'>
				{Object.values(cartItems).every((amount) => amount == 0) ? (
					<li className='empty-cart-wrapper'>
						<h2 className='h2'>Your cart is empty</h2>
					</li>
				) : (
					PRODUCTS.map((product) => {
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
											min='1'
											max='99'
											value='1'
											className='cart__item__amount'
										/>
										<button>
											<svg
												viewPort='0 0 1 1'
												height='15'
												width='15'
												version='1.1'
												xmlns='http://www.w3.org/2000/svg'
											>
												<line
													x1='0'
													y1='11'
													x2='11'
													y2='0'
													stroke='red'
													stroke-width='2'
												/>
												<line
													x1='0'
													y1='0'
													x2='11'
													y2='11'
													stroke='red'
													stroke-width='2'
												/>
											</svg>
										</button>
									</div>
								</li>
							);
						}
					})
				)}
			</ul>
			<div className='cart__checkout'>
				<div className='container'>
					<div className='flex flex-jc-sb flex-ai-c'>
						<p className='clr-neutral-100'>Total: </p>
						<p className='clr-neutral-100'>0 USD</p>
					</div>
					<button className='btn primary-btn uppercase cart__checkout__btn'>
						Continue to checkout
					</button>
				</div>
			</div>
		</div>
	);
}
