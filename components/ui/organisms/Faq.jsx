import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaqItem } from '../molecules/FaqItem'
import { Dropdown } from '../atoms/Dropdown'

export const Faq = ({ items, categories }) => {
	const [faqItems, setFaqItems] = useState(items)

	const filterFaqItems = (type) => {
		const result =
			type === 'All' ? items : items.filter((item) => item.type === type)
		setFaqItems(result)
	}

	return (
		<div className="md:divide-y">
			<div className="flex flex-col md:flex-row pb-12 justify-between md:items-center">
				<h2 className="basis-1/2 text-primary text-[36px] md:text-[48px]">
					Frequently asked
					<br />
					questions
				</h2>
				<div className="basis-1/4 w-full relative my-6">
					<Dropdown items={categories} onClick={filterFaqItems} />
				</div>
			</div>
			<div className="divide-y">
				{faqItems.map((item) => (
					<FaqItem
						key={item.type + item.question}
						type={item.type}
						question={item.question}
						answer={item.answer}
					/>
				))}
			</div>
		</div>
	)
}

Faq.propTypes = {
	/**
	 * An array with each Question / Answer
	 */
	items: PropTypes.arrayOf(
		PropTypes.shape({
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
		})
	).isRequired,
	/**
	 * The list of available categories for the list to be filtered
	 */
	categories: PropTypes.arrayOf(PropTypes.string),
}

// These default values could be empty
// This is mostly for documentation / demo purposes at Storybook
Faq.defaultProps = {
	items: [
		{
			type: 'Type #1',
			question: 'Lorem ipsum dolor sit amet',
			answer: [
				{
					type: 'paragraph',
					data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
			],
		},
		{
			type: 'Type #2',
			question: 'Lorem ipsum dolor sit amet',
			answer: [
				{
					type: 'paragraph',
					data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
			],
		},
	],
	categories: ['Type #1', 'Type #2'],
}
