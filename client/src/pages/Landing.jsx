import React from 'react'
import { logo, banner, banner_alt } from '../assets'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="p-6 space-y-8">
		<header className="container flex items-center justify-between h-22 px-4 mx-auto rounded dark:bg-gray-900">
			<div className='items-center space-x-8 flex'>
			<Link to="/">
				<img src={logo} alt="logo" className='p-2 w-20 object-contain'/>
			</Link>
            <Link to="/">
			<h1 className="text-3xl font-bold leading-none dark:text-violet-400">
				DocStream
			</h1>
            </Link>
			</div>
			<div className="items-center hidden space-x-8 lg:flex">
				<div className="space-x-4">
					<Link to="/login">Sign In</Link>
				</div>
                <Link to="/register">
				<button className="px-4 py-2 rounded-md dark:bg-violet-400 dark:text-gray-900">Sign up Now</button>
                </Link>
			</div>
			<button className="flex items-center justify-center p-2 lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-50">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</header>
		<main>
			<div className="container mx-auto space-y-16">
			<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
		<div className="flex items-center justify-center p-6 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-full xl:h-full 2xl:h-full">
			<img src={ banner } alt="banner" className="object-contain h-72 sm:h-80 lg:h-96 rounded-lg xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Hundreds of
				<span className="dark:text-violet-400"> Documentaries</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">All On Demand
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to="/register" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign Up Now
                </Link>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Know More</a>
			</div>
		</div>
	</div>
</section>
				<section>
					<span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-400">DocStream | Documentaries at your fingertips</span>
					<h2 className="text-5xl font-bold lg:text-center dark:text-gray-50">Experience the next Gen Streaming Platform</h2>
					<div className="grid gap-6 my-16 lg:grid-cols-3">
						<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">1</div>
							<p className="text-2xl font-semibold">
								<b>Hundreds</b> of documentaries to choose from
							</p>
						</div>
						<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">2</div>
							<p className="text-2xl font-semibold">
								Award-winning <b>exclusives</b> and <b>originals</b>
							</p>
						</div>
						<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">3</div>
							<p className="text-2xl font-semibold">
								Watch <b>anytime</b>, <b>anywhere</b>
							</p>
						</div>
					</div>
				</section>
				
				<section>
					<div className="grid gap-6 lg:grid-cols-3">
						<div className="overflow-hidden rounded lg:flex lg:col-span-3">
							<img src={ banner_alt } alt="" className="object-cover w-full h-auto max-h-96 dark:bg-gray-500" />
							<div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-gray-900">
								<span className="self-start px-3 py-1 text-sm rounded-full dark:bg-violet-400 dark:text-gray-900">Unlock a new perspective</span>
								<h2 className="text-3xl font-bold md:flex-1">Experience the power of documentaries with DocStream!</h2>
							</div>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900">
							<p>Get access to the best content library with our curated video streaming service</p>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900">
							<p>Large catalogue with Science and Technology, Historical, Biographical and other genre</p>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900">
							<p>Explore the new world of infotainment</p>
						</div>	
					</div>
				</section>
			</div>
		</main>
		<footer className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
		<div className="grid grid-cols-12">
			<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
					<img src={logo} alt="logo" className='p-2 w-20 object-contain'/>
					</div>
					<span className="self-center text-2xl font-semibold">DocStream</span>
				</a>
			</div>	
		</div>
		<div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2023 All rights reserved</span>
			</div>
			<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
						<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
						<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>
	</div>
  )
}

export default Landing