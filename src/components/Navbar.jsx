import React, { useState } from "react";

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<header className='header'>
			<div className='container flex flex-jc-sb flex-ai-c'>
				<a href='#' className='header__logo'>
					<img
						src='src/images/logo.png'
						alt='Coffeestyle'
						width='120'
					/>
				</a>
				<nav className='navbar'>
					<ul
						className={`navbar__list flex flex-ai-c uppercase ${
							navOpen ? "active" : ""
						}`}
					>
						<li className='navbar__item'>
							<a href='#home' className='navbar__link'>
								Home
							</a>
						</li>
						<li className='navbar__item'>
							<a href='#about' className='navbar__link'>
								About
							</a>
						</li>
						<li className='navbar__item'>
							<a href='#product' className='navbar__link'>
								Our products
							</a>
						</li>
						<li className='navbar__item'>
							<a href='#blog' className='navbar__link'>
								Blog
							</a>
						</li>
						<li className='navbar__item'>
							<a href='#contact' className='navbar__link'>
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<div className='header__action flex'>
					<button className='header__action__btn' aria-label='cart'>
						<ion-icon
							name='bag-outline'
							aria-hidden='true'
						></ion-icon>
						<span className='btn-badge'>0</span>
					</button>
					<button className='header__action__btn'>
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
			</div>
		</header>
	);
}
