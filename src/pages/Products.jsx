import React from "react";
import ProductList from "../components/ProductList/ProductList";

export default function Products() {
	return (
		<>
			<section className='product section'>
				<div className='container'>
					<div className='section-padding'>
						<h1 className='section-title'>Our Products</h1>
						<p className='section-description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
						<form>
							<fieldset className='category-wrapper'>
								<legend className='sr-only'>
									Select product category
								</legend>
								<div>
									<input
										className='radio-product-category'
										type='radio'
										id='productCategory1'
										name='category'
										value='all'
									/>
									<label
										htmlFor='productCategory1'
										className='product-category-btn uppercase'
									>
										All Products
									</label>
								</div>
								<div>
									<input
										className='radio-product-category'
										type='radio'
										id='productCategory2'
										name='category'
										value='coffee'
									/>
									<label
										htmlFor='productCategory2'
										className='product-category-btn uppercase'
									>
										Coffee Mugs
									</label>
								</div>
								<div>
									<input
										className='radio-product-category'
										type='radio'
										id='productCategory3'
										name='category'
										value='tea'
									/>
									<label
										htmlFor='productCategory3'
										className='product-category-btn uppercase'
									>
										Tea Mugs
									</label>
								</div>
								<div>
									<input
										className='radio-product-category'
										type='radio'
										id='productCategory4'
										name='category'
										value='premium'
									/>
									<label
										htmlFor='productCategory4'
										className='product-category-btn uppercase'
									>
										Premium
									</label>
								</div>
								<div>
									<input
										className='radio-product-category'
										type='radio'
										id='productCategory5'
										name='category'
										value='other'
									/>
									<label
										htmlFor='productCategory5'
										className='product-category-btn uppercase'
									>
										Other
									</label>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
				<ProductList />
			</section>
		</>
	);
}
