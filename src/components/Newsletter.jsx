import React from "react";

export default function Newsletter() {
	return (
		<section className='subscribe section'>
			<div className='container'>
				<p className='section-title uppercase'>
					Sign up and get free coffee bags
				</p>
				<h2 className='clr-neutral-100'>Coffee updates</h2>
				<div className='flex flex-jc-c wrapper'>
					<input type='text' />
					<button className='clr-neutral-100 uppercase'>
						Subscribe
					</button>
				</div>
			</div>
		</section>
	);
}
