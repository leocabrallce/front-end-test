import React from 'react'
import PropTypes from 'prop-types'
import Flickity from 'react-flickity-component'
import { Testimonial } from '../molecules/Testimonial'

export function Testimonials({ testimonials }) {
	return (
		<div className="overflow-x-hidden">
			<Flickity
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
