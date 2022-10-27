import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { FabButton } from '../atoms/FabButton'
import gsap from 'gsap'

export function FaqItem({ type, question, answer }) {
	const faqParagraphs = useRef()
	const [isActive, setIsActive] = useState(false)

	const handleClick = () => {
		setIsActive(!isActive)

		gsap.context(() => {
			gsap.to(faqParagraphs.current, {
				height: isActive ? 0 : 'auto',
				duration: 0.35,
				ease: 'power3.inOut',
			})
		}, faqParagraphs)
	}

	return (
		<div className="py-8">
			<div className="flex flex-row items-center">
				<div className="basis-3/12 hidden md:block text-primary font-medium">
					{type}
				</div>
				<div className="basis-11/12 md:basis-8/12 text-secondary-800 font-medium">
					{question}
				</div>
				<div className="basis-1/12">
					<FabButton onClick={handleClick} />
				</div>
			</div>
			<div className="flex flex-row">
				<div className="basis-3/12 hidden md:block"></div>
				<div className="basis-11/12 md:basis-8/12">
					<div
						ref={faqParagraphs}
						className="mt-6 overflow-hidden h-0"
					>
						{answer.map(({ data }, index) => (
							<p
								key={index}
								className="font-light text-secondary-400"
							>
								{data}
							</p>
						))}
					</div>
				</div>
				<div className="basis-1/12"></div>
			</div>
		</div>
	)
}

FaqItem.propTypes = {
	/**
	 * Type / Topic of the question
	 */
	type: PropTypes.string.isRequired,
	/**
	 * The question text
	 */
	question: PropTypes.string.isRequired,
	/**
	 * The answer array. Each array object should contain the text of each paragraph
	 */
	answer: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf(['paragraph']),
			data: PropTypes.string.isRequired,
		})
	).isRequired,
}

// These default values could be empty
// This is mostly for documentation / demo purposes at Storybook
FaqItem.defaultProps = {
	type: 'Type',
	question: 'Lorem ipsum dolor sit amet',
	answer: [
		{
			type: 'paragraph',
			data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
	],
}
