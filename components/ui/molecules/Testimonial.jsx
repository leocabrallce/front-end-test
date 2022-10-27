import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'

export function Testimonial({
	picture,
	name,
	title,
	linkedin,
	statement,
	category,
	subcategory,
}) {
	const imageAlt = `${name}'s profile picture`

	return (
		<div className="max-w-[90vw] md:max-w-[50vw] border border-solid border-secondary-200 rounded">
			<div className="flex flex-row justify-between items-center p-6 sm:p-10 gap-2 bg-white">
				<div className="flex flex-row items-center gap-6">
					<Image
						className="rounded-full"
						src={picture}
						alt={imageAlt}
						width="80"
						height="80"
					/>
					<div className="flex flex-col">
						<div className="text-primary lg:text-secondary-400 font-bold">
							{name}
						</div>
						<div className="text-secondary-400 font-light">
							{title}
						</div>
					</div>
				</div>

				{linkedin && (
					<a href={linkedin} target="_blank" rel="noreferrer">
						<svg
							className="sm:mr-12"
							width="18"
							height="19"
							viewBox="0 0 18 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								opacity="0.3"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M2.43243 0.856445C1.08961 0.856445 0 1.92225 0 3.23572C0 4.54919 1.08961 5.63729 2.43243 5.63729C3.77525 5.63729 4.86486 4.54919 4.86486 3.23572C4.86402 1.92225 3.77441 0.856445 2.43243 0.856445ZM17.9955 18.0675V18.0667H18V11.4059C18 8.14739 17.3022 5.63729 13.5129 5.63729C11.6913 5.63729 10.4689 6.64224 9.96982 7.59497H9.91713V5.9415H6.32432V18.0667H10.0654V12.0628C10.0654 10.4819 10.3635 8.95332 12.3108 8.95332C14.2295 8.95332 14.2582 10.7574 14.2582 12.1642V18.0675H17.9955ZM4.37838 6.59346H0.486486V18.0675H4.37838V6.59346Z"
								fill="black"
							/>
						</svg>
					</a>
				)}
			</div>
			<div className="flex flex-col p-6 sm:px-14 sm:py-8 lg:px-28 lg:py-16 bg-secondary-50">
				<div className="text-xl font-thin">{statement}</div>
				<div className="flex flex-row gap-2 mt-6">
					<div className="text-xs font-thin">{category}</div>
					<div className="text-xs font-thin">·</div>
					<div className="text-xs font-thin">{subcategory}</div>
				</div>
			</div>
		</div>
	)
}

Testimonial.propTypes = {
	picture: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	linkedin: PropTypes.string.isRequired,
	statement: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	subcategory: PropTypes.string.isRequired,
}

// Using same default values because the API wasn't returning content on Testimonials property
// On production, this data should come from the API and should be passed via props or context
Testimonial.defaultProps = {
	picture: '/images/testimonial-avatar.png',
	name: 'Irene Pereyra',
	title: "Interaction Design Fellow '19",
	linkedin: 'https://linkedin.com',
	statement:
		'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
	category: 'Education',
	subcategory: 'B.A. Visual Design',
}
