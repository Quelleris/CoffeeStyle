import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { PRODUCTS } from "../../data/data";

export default function Navbar() {
	const { cartItems } = useContext(CartContext);

	const [navOpen, setNavOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const [wishListOpen, setWhishListOpen] = useState(false);

	return (
		<header className='header'>
			<div className='container flex flex-jc-sb flex-ai-c'>
				<Link to='/' className='header__logo'>
					<img
						src='src/images/logo.png'
						alt='Coffeestyle'
						width='120'
						height='26'
					/>
				</Link>

				<nav className='navbar'>
					<ul
						className={`navbar__list flex flex-ai-c uppercase ${
							navOpen ? "active" : ""
						}`}
					>
						<li className='navbar__item'>
							<Link to='/' className='navbar__link'>
								Home
							</Link>
						</li>
						<li className='navbar__item'>
							<Link to='/about' className='navbar__link'>
								About
							</Link>
						</li>
						<li className='navbar__item'>
							<Link to='/products' className='navbar__link'>
								Our Products
							</Link>
						</li>
						<li className='navbar__item'>
							<Link to='/blog' className='navbar__link'>
								Blog
							</Link>
						</li>
						<li className='navbar__item'>
							<Link to='/contact' className='navbar__link'>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				<div className='header__action flex'>
					<button className='header__action__btn' aria-label='cart'>
						<ion-icon
							name='bag-outline'
							aria-hidden='true'
							onClick={() => setCartOpen(true)}
						></ion-icon>
						<span className='btn-badge'>0</span>
					</button>
					<button
						className='header__action__btn'
						aria-label='wishlist'
					>
						<ion-icon
							name='heart-outline'
							aria-hidden='true'
						></ion-icon>
						<span className='btn-badge'>0</span>
					</button>
					<button
						className='nav-menu-toggler'
						aria-label='menu'
						onClick={() => setNavOpen(!navOpen)}
					></button>
				</div>
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
							<p>Total: </p>
							<p>0 USD</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
