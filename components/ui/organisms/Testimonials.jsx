import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Flickity from 'react-flickity-component'
import { Testimonial } from '../molecules/Testimonial'

export function Testimonials({ testimonials }) {
	const [ref, setRef] = useState()

	return (
		<div className="overflow-x-hidden relative">
			<Flickity
				flickityRef={(r) => setRef(r)}
				className="carousel"
				elementType="div"
				options={{ initialIndex: 1 }}
				disableImagesLoaded={false}
				static
			>
				{testimonials.map((testimonial, index) => (
					<div key={index} className="mx-6 ">
						<Testimonial {...testimonial} />
					</div>
				))}
			</Flickity>
			<div className="md:block flex flex-row justify-end mx-6 gap-2">
				<svg
					onClick={() => ref.previous()}
					className="cursor-pointer md:absolute md:bottom-1/2 md:left-12"
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="white"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="24" cy="24" r="23.5" stroke="#ECECEC" />
					<path
						d="M26 20L22 24L26 28"
						stroke="#4F469C"
						strokeWidth="1.2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<svg
					onClick={() => ref.next()}
					className="cursor-pointer md:absolute md:bottom-1/2 md:right-12"
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="white"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="24" cy="24" r="23.5" stroke="#ECECEC" />
					<path
						d="M23 20L27 24L23 28"
						stroke="#4F469C"
						strokeWidth="1.2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	)
}

Testimonials.propTypes = {
	testimonials: PropTypes.arrayOf(
		PropTypes.shape({
			picture: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			linkedin: PropTypes.string.isRequired,
			statement: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			subcategory: PropTypes.string.isRequired,
		})
	),
}

// Using same default values because the API wasn't returning content on Testimonials property
// On production, this data should come from the API and should be passed via props or context
Testimonials.defaultProps = {
	testimonials: [
		{
			picture: '/images/testimonial-avatar.png',
			name: 'Irene Pereyra',
			title: "Interaction Design Fellow '19",
			linkedin: 'https://linkedin.com',
			statement:
				'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
			category: 'Education',
			subcategory: 'B.A. Visual Design',
		},
		{
			picture: '/images/testimonial-avatar.png',
			name: 'Irene Pereyra',
			title: "Interaction Design Fellow '19",
			linkedin: 'https://linkedin.com',
			statement:
				'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
			category: 'Education',
			subcategory: 'B.A. Visual Design',
		},
		{
			picture: '/images/testimonial-avatar.png',
			name: 'Irene Pereyra',
			title: "Interaction Design Fellow '19",
			linkedin: 'https://linkedin.com',
			statement:
				'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
			category: 'Education',
			subcategory: 'B.A. Visual Design',
		},
	],
}
