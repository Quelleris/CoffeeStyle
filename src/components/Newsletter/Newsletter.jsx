import React from "react";

export default function Newsletter() {
	return (
		<section className='subscribe section'>
			<div className='container'>
				<p className='section-title uppercase'>
					Sign up to our newsletter
				</p>
				<h2 className='clr-neutral-100'>Coffee Updates</h2>
				<div className='input-wrapper'>
					<input
						type='email'
						className='subscribe-input uppercase'
						placeholder='customer@coffestyle.io'
					/>
					<button className='btn primary-btn uppercase'>
						Subscribe
					</button>
				</div>
			</div>
		</section>
	);
}
