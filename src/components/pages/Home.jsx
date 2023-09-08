import React from "react";
import { Hero, ProductList, Footer, Newsletter } from "../index.js";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<main>
				<Hero />
				<section
					className='about section'
					id='about'
					aria-label='about'
				>
					<div className='container'>
						<h2>
							Even the all-powerful Pointing has no control about
							the blind texts.
						</h2>
						<p className='about-description'>
							It is a paradisematic country, in which roasted
							parts of sentences fly into your mouth. Even the
							all-powerful Pointing has no control about the blind
							texts it is an almost unorthographic life One day
							however a small line of blind text by the name of
							Lorem Ipsum decided to leave for the far World of
							Grammar.
						</p>
						<Link to='/about' className='full-story'>
							Read the full story
						</Link>
					</div>
				</section>
				<ProductList />
				<section className='blog section' id='blog' aria-label='blog'>
					<div className='container'>
						<div className='title-wrapper flex flex-jc-sb'>
							<h2 className='h2 section-title'>
								Explore our blog
							</h2>
							<a href='#' className='btn-link'>
								<span>View All</span>
								<ion-icon
									name='arrow-forward'
									aria-hidden='true'
								></ion-icon>
							</a>
						</div>

						<ul className='grid-list'>
							<li>
								<div className='blog-card'>
									<div className='card-banner img-holder'>
										<img
											src='src/images/blog-1.jpg'
											width='374'
											height='243'
											loading='lazy'
											alt="Why do I get a headache when I haven't had my coffee?"
											className='img-cover'
										/>

										<a href='#' className='card-btn'>
											<span>Read more</span>
											<ion-icon
												name='add-ouline'
												aria-hidden='true'
											></ion-icon>
										</a>
									</div>

									<div className='card-content'>
										<h3>
											<a href='#' className='card-title'>
												Why do I get a headache when I
												haven't had my coffee?
											</a>
										</h3>
										<p>
											Lorem, ipsum dolor sit amet
											consectetur adipisicing elit.
											Laborum voluptates quisquam
											explicabo voluptas dolorem quibusdam
											assumenda excepturi.
										</p>
										<time datetime='2022-12-18'>
											December 18, 2022
										</time>
									</div>
								</div>
							</li>

							<li>
								<div className='blog-card'>
									<div className='card-banner img-holder'>
										<img
											src='src/images/.blog-2.jpg'
											width='374'
											height='243'
											loading='lazy'
											alt='How long does a cup of coffee keep you awake?'
											className='img-cover'
										/>

										<a href='#' className='card-btn'>
											<span>Read more</span>
											<ion-icon
												name='add-ouline'
												aria-hidden='true'
											></ion-icon>
										</a>
									</div>

									<div className='card-content'>
										<h3>
											<a href='#' className='card-title'>
												How long does a cup of coffee
												keep you awake?
											</a>
										</h3>
										<p>
											Lorem, ipsum dolor sit amet
											consectetur adipisicing elit.
											Laborum voluptates quisquam
											explicabo voluptas dolorem quibusdam
											assumenda excepturi.
										</p>
										<time datetime='2022-12-18'>
											December 18, 2022
										</time>
									</div>
								</div>
							</li>

							<li>
								<div className='blog-card'>
									<div className='card-banner img-holder'>
										<img
											src='src/images/blog-3.jpg'
											width='374'
											height='243'
											loading='lazy'
											alt='Research suggests that heavy coffee drinkers may reap health benefits'
											className='img-cover'
										/>

										<a href='#' className='card-btn'>
											<span>Read more</span>
											<ion-icon
												name='add-ouline'
												aria-hidden='true'
											></ion-icon>
										</a>
									</div>

									<div className='card-content'>
										<h3>
											<a href='#' className='card-title'>
												Research suggests that heavy
												coffee drinkers may reap health
												benefits
											</a>
										</h3>
										<p>
											Lorem, ipsum dolor sit amet
											consectetur adipisicing elit.
											Laborum voluptates quisquam
											explicabo voluptas dolorem quibusdam
											assumenda excepturi.
										</p>
										<time datetime='2022-12-18'>
											December 18, 2022
										</time>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<Newsletter />
			</main>
		</>
	);
}
