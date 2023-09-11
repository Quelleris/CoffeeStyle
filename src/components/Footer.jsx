import React from "react";

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='grid-list section'>
					<ul className='footer__list'>
						<li className='footer__list__item'>
							<a href='#' className='logo'>
								<img
									src='src/images/logo.png'
									alt='Coffeestyle'
									width='120'
								/>
							</a>
						</li>

						<li className='footer__list__item'>
							<p className='footer__desc'>
								Delivering the best coffee life since 1996. From
								coffee geeks to the real ones.
							</p>
						</li>
					</ul>

					<ul className='footer__list'>
						<li className='footer__list__item'>
							<p className='footer__list__title'>
								Help & Information
							</p>
						</li>
						<li className='footer__list__item'>
							<a href='#' className='footer__link'>
								Help & Contact Us
							</a>
						</li>
						<li className='footer__list__item'>
							<a href='#' className='footer__link'>
								Returns & Refunds
							</a>
						</li>
						<li className='footer__list__item'>
							<a href='#' className='footer__link'>
								Online Stores
							</a>
						</li>
						<li className='footer__list__item'>
							<a href='#' className='footer__link'>
								Terms & Conditions
							</a>
						</li>
					</ul>

					<ul className='footer__list'>
						<li className='footer__list__item'>
							<p className='footer__list__title'>Follow Us</p>
						</li>
						<li className='footer__list__item'>
							<a href='#' className='footer__link'>
								Facebook
							</a>
						</li>
						<li className='footer__list__item'>
							<a href='#' className='footer__link'>
								Instagram
							</a>
						</li>
						<li className='footer__list__item'>
							<a href='#' className='footer__link'>
								Pinterest
							</a>
						</li>
						<li className='footer__list__item'>
							<a href='#' className='footer__link'>
								Twitter
							</a>
						</li>
					</ul>

					<ul className='footer__list'>
						<li className='footer__list__item'>
							<p className='footer__list__title'>Contact Us</p>
						</li>
						<li className='footer__list__item'>
							<p>We're always happy to help</p>
						</li>
						<li className='footer__list__item'>
							<a href='#' className='footer__link'>
								us@coffeestyle.io
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
