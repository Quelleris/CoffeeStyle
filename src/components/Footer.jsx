import React from "react";

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='grid-list section'>
					<ul className='footer-list'>
						<li>
							<a href='#' className='logo'>
								<img
									src='src/images/logo.png'
									alt='Coffeestyle'
									width='102'
								/>
							</a>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Help & Contact Us
							</a>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Returns & Refunds
							</a>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Online Stores
							</a>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Terms & Conditions
							</a>
						</li>
					</ul>

					<ul className='footer-list'>
						<li>
							<p className='footer-list-title'>
								Help & Information
							</p>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Help & Contact Us
							</a>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Returns & Refunds
							</a>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Online Stores
							</a>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Terms & Conditions
							</a>
						</li>
					</ul>

					<ul className='footer-list'>
						<li>
							<p className='footer-list-title'>Follow Us</p>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Facebook
							</a>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Instagram
							</a>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Pinterest
							</a>
						</li>
						<li>
							<a href='#' className='footer-link'>
								Twitter
							</a>
						</li>
					</ul>

					<ul className='footer-list'>
						<li>
							<p className='footer-list-title'>Contact Us</p>
						</li>
						<li>
							<p>We're always happy to help</p>
						</li>
						<li>
							<a href='#' className='footer-link'>
								us@coffeestyle.io
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
