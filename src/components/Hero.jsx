import React from "react";

export default function Hero() {
	return (
		<section className='hero' id='hero' aria-label='home'>
			<div className='hero-section'>
				<p className='hero-subtitle uppercase clr-neutral-100'>
					Best place to buy design
				</p>
				<h1>Coffee mugs</h1>
				<p className='hero-description clr-neutral-100'>
					The most versatile furniture system ever created. Designed
					to fit your life, made to move and grow.
				</p>
				<a href='#' className='hero-explore uppercase'>
					Explore our products
				</a>
			</div>
		</section>
	);
}
