import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<header className='header'>
			<div className='container flex flex-jc-sb flex-ai-c'>
				<Link to='/' className='header__logo'>
					<img
						src='src/images/logo.png'
						alt='Coffeestyle'
						width='120'
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
