import React from 'react'
import Modal from './Modal'
import { useState } from 'react'

const Card = ({ _id, title, category, description, uniqueFileName, photo, handleShowModal }) => {

	const handleOnClick = () => {
		handleShowModal(uniqueFileName)
	}

	const [text, setText] = useState(description.slice(0, 80))
	const [readmore, setReadmore] = useState(false)



	return (
		<div>
			<a rel="noopener noreferrer" href="#" onClick={handleOnClick} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={photo} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title.slice(0,30)}</h3>
					<span className="text-xs dark:text-gray-400">{`Category: ${category}`}</span>

				</div>
			</a>

			<div
				onClick={() => {
					if (readmore) {
						setReadmore(false)
						setText(description.slice(0, 80))
					} else {
						setReadmore(true)
						setText(description)
					}

				}}
			> <p
				className='px-6 pb-6 max-w-sm mx-auto group'
			>
					{text}
					<br></br>
					<a  className='hover:underline font-bold'>{readmore ? 'Show Less' : '...Read More'}</a>

				</p>

			</div>

		</div>

	)
}

export default Card